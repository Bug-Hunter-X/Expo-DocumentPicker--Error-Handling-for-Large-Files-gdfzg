```javascript
import * as DocumentPicker from 'expo-document-picker';

async function pickDocument() {
  try {
    const fileSizeLimit = 5 * 1024 * 1024; // Example 5MB limit
    const result = await DocumentPicker.getDocumentAsync({ type: '*' });
    if (result.type === 'cancel') {
      return;
    }

    // Check file size before proceeding
    if (result.size > fileSizeLimit) {
      alert(`File size exceeds the limit of ${fileSizeLimit / (1024 * 1024)}MB`);
      return;    }

    console.log(result);
  } catch (error) {
    console.error('Error picking document:', error);
  }
}
```