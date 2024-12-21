# Expo DocumentPicker: Large File Handling Error

This repository demonstrates a bug in the Expo DocumentPicker library where selecting large files results in a vague error message.  The provided code samples show how to reproduce the issue and a potential workaround.

## Bug Description

When attempting to pick a large file using DocumentPicker, the library throws an error without specifying the file size limitation or providing any helpful context. This makes debugging and finding a solution difficult.

## Solution

A potential solution is to implement a file size check before initiating the file picker to prevent selecting files that exceed the size limit of the DocumentPicker or the platform (Android/iOS).