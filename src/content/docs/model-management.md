> Written for Khaled Chat 0.1.0.

## Understanding local AI models

A local AI model is a file containing the trained weights of a language model. Khaled Chat runs it on your own computer, so your messages are processed locally.

Bigger models usually give better answers, but they need more memory and run more slowly. Smaller models are faster and work on more computers.

## The built-in models

Khaled Chat comes with a list of 8 chat models. It recommends the one that fits your computer best:

- **Qwen3 1.7B**: 1.83 GB, for 8 GB computers and older processors (tested in Khaled Chat)
- **Gemma 4 E2B**: 3.35 GB
- **Gemma 4 E4B Compact**: 3.86 GB
- **Gemma 4 E4B**: 5.15 GB
- **Gemma 4 26B Compact**: 9.66 GB
- **gpt-oss 20B**: 12.11 GB
- **Gemma 4 26B**: 14.44 GB
- **gpt-oss 120B**: 63.39 GB, for high-end workstations

All are Apache-2.0 licensed. The [Features page](/features/#models) shows which computers each one suits.

The list ships inside the app. Khaled Chat does not fetch a model list from the internet.

## Downloading a model

Go to **Settings → Model** and choose **Download & use…** next to a model.

A confirmation shows its size, source, destination folder and license. Nothing is downloaded until you choose **Download**.

The download shows its progress and can be cancelled. Each file is checked against its published SHA-256 checksum before use.

If a download is interrupted, Khaled Chat does not continue it on its own. The next time, you are offered **Resume download…**. It continues from where it stopped, after you confirm again.

## Switching models

In **Settings → Model**, choose **Use** next to a model you have already downloaded. Your chats stay where they are, and the next answer uses the new model.

## Removing models

In **Settings → Model**, remove a model you no longer need to free its disk space. **Settings → Files & storage** shows how much space models and other parts use. You can download a removed model again later.

## Where models are stored

Models are saved in the Khaled Chat folder under your user profile (`%APPDATA%\Khaled Chat\models`). The download confirmation always shows the exact folder.

## Importing your own model files

This isn't supported yet.
