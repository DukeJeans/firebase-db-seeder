import * as admin from 'firebase-admin';
import * as fs from 'fs/promises';
import { createInterface } from 'readline/promises';
import { resolve } from 'path';

async function promptConfigurationInputs() {
    const readLine = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('To begin data import, please provide the following data values required for setup...\n');

    const filePath = await readLine.question('Enter the path to the JSON data file: ');

    const parentCollectionName = await rl.question('Enter collection name for **Parent Data** (e.g., users, vehicle_makes): ');
    const nestedCollectionName = await rl.question('Enter collection name for **Nested Data** (e.g., orders, vehicle_models): ');

    const parentNameKey = await rl.question('Enter the **key** for the Parent Item\'s Name/ID (e.g., name, sku): ');
    const nestedArrayKey = await rl.question('Enter the **key** for the Nested Array (e.g., models, items): ');
    
    readLine.close();

    return {
        filePath: resolve(filePath.trim()),
        parentCollection: parentCollectionName.trim() || 'parent_collection',
        nestedCollection: nestedCollectionName.trim() || 'nested_collection',
        parentKey: parentNameKey.trim() || 'name',
        nestedKey: nestedArrayKey.trim() || 'models'
    };
}