# Extract public key from PEM Certificate using Node.js

This Node.js script lets you extract the public key from a URL and save it locally to your filesystem. Follow the steps below to use the script:

## Prerequisites

Before using the script, kindly ensure that you have Node.js installed on your system. You can download Node.js from the [official website](https://nodejs.org).

## Getting Started

1. **Download the script:**

   Download the [`extractPublicKeyFromURL.js`](./extractPublicKeyFromURL.js) file from this repository and save it to a location on your computer.

2. **Open a Terminal or Command Prompt:**

   Navigate to the directory where you saved the `extractPublicKeyFromURL.js` file using the terminal or command prompt.

4. **Generate Public Key:**

   To run the script and generate the public key, use the following command:

   ```bash
   node extractPublicKeyFromURL.js <URL> <path/to/public_key.pem>
   ```

   Replace `<URL>` with the desiered URL without port number, and `<path/to/public_key.pem>` with the desired output file path for the public key to be extracted.
