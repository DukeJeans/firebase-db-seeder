## Purpose of Application

Import vehicle makes and models into Firestore collections, provided from https://github.com/Savage3D/car-makes-models-data/blob/master/car-makes.json.

## Required Manual Setup

1. Upload an Admin SDK key file into the root directory called `adminsdk-key.json` from the same Firebase project through your service account UI.

    ```json
    {
      "type": "service_account",
      "project_id": "your-admin-project-id",
      "private_key_id": "012abc345def6789ghi012jkl345mno678pqr901",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCB... (very long string of random characters) ...GkQIDAQABAoIBAGX/p8c=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-xxxxx@your-admin-project-id.iam.gserviceaccount.com",
      "client_id": "123456789012345678901",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40your-admin-project-id.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    }
    ```