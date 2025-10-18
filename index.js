import admin from 'firebase-admin';
import * as fs from 'fs/promises';
import { createInterface } from 'readline/promises';
import { resolve } from 'path';

async function promptConfigurationInputs() {
    const readLine = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('To begin data import, please provide the following data values required for setup...');

    const filePath = await readLine.question('Enter the path to the JSON data file: ');

    const parentCollectionName = await readLine.question('Enter collection name for **Parent Data** (e.g., users, vehicle_makes): ');
    const nestedCollectionName = await readLine.question('Enter collection name for **Nested Data** (e.g., orders, vehicle_models): ');

    const parentNameKey = await readLine.question('Enter the **key** for the Parent Item\'s Name/ID (e.g., name, sku): ');
    const nestedArrayKey = await readLine.question('Enter the **key** for the Nested Array (e.g., models, items): ');
    
    readLine.close();

    return {
        filePath: resolve(filePath.trim()),
        parentCollection: parentCollectionName.trim() || 'parent_collection',
        nestedCollection: nestedCollectionName.trim() || 'nested_collection',
        parentKey: parentNameKey.trim() || 'name',
        nestedKey: nestedArrayKey.trim() || 'models'
    };
}

async function uploadDataToFirebase() {
    const configurationResult = await promptConfigurationInputs();

    const { 
        filePath: DATA_FILE_PATH,
        parentCollection: PARENT_COLLECTION, 
        nestedCollection: NESTED_COLLECTION,
        parentKey: PARENT_NAME_KEY,
        nestedKey: NESTED_ARRAY_KEY
    } = configurationResult;

    try {
        admin.initializeApp();
        console.log('\nFirebase Admin Initialized successfully.');
    } catch (error) {
        console.error('ERROR: Failed to initialize Firebase Admin (Check GOOGLE_APPLICATION_CREDENTIALS):', error.message);
        process.exit(1);
    }
}

uploadDataToFirebase().catch(error => {
    if (!error.message.includes("ERROR:")) {
         console.error("\nAn unexpected error occurred during execution:", error);
         process.exit(1);
    }
});