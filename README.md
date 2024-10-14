# Reading Time Estimator Browser Extension

This browser extension automatically calculates the estimated reading time for articles and displays it on the page. It works with both English and Japanese articles by calculating the number of words for English text and the number of characters for Japanese text.

<img width="600" alt="スクリーンショット 2024-10-14 9 54 24" src="https://github.com/user-attachments/assets/ff3d3b0f-7a4a-4205-9f29-85c932afbc64">

<img width="600" alt="スクリーンショット 2024-10-14 9 53 10" src="https://github.com/user-attachments/assets/ad707596-02df-4905-89a9-0bad8c0d74c5">

## Features

- **Automatic Reading Time Calculation**: Adds an estimated reading time badge to articles on web pages.
- **Supports English and Japanese**:
  - For English text, the extension counts the number of words.
  - For Japanese text, the extension counts the number of characters, excluding punctuation and whitespace.
- **Customizable Styling**: The reading time badge uses the site's existing styles for a seamless appearance.
- **Supported websites**: 
  - Nikkei: https://www.nikkei.com/article/*
  - Chrome Developers docs: 
    - https://developer.chrome.com/docs/extensions/*
    - https://developer.chrome.com/docs/webstore/*
  

## How It Works

- The extension uses `document.querySelector` to find the main content of an article.
- For English articles, it calculates the word count based on spaces between words.
- For Japanese articles, it calculates the number of characters using a regular expression that matches Hiragana, Katakana, and Kanji characters.
- Reading time is estimated at **150 words per minute** for English text and **400 characters per minute** for Japanese text.
- The reading time badge is inserted after the article header or the date of publication.

## Installation

1. Clone this repository or download the source code.
2. Open your browser’s extensions page:
   - For Chrome, go to `chrome://extensions/`.
   - For Firefox, go to `about:addons`.
3. Enable "Developer mode" (Chrome) or "Debug mode" (Firefox).
4. Click "Load unpacked" and select the folder containing this extension's files.
5. The extension should now be active in your browser.

## Usage

- Once the extension is installed and activated, visit the supported sites in your browser.
- The estimated reading time badge will automatically appear below the article title or next to the publication date.

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to this project. Especially, support for more websites would be greatly appreciated. Keep in minds that this extension id built for educational purposes and most likely many similar extensions exist out there. 

## License

This project is licensed under the MIT License.
This project built by following [Chrome For Developer's Chrome Extensions tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-on-every-tab). 
