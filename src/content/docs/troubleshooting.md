> Written for Khaled Chat 0.1.0.

## Windows says it "protected your PC"

The 0.1.0 installer is not code-signed yet. Choose **More info**, then **Run anyway**. Only do this with an installer downloaded from the official [Download page](/download/), and compare its SHA-256 checksum with the one shown there.

## Answers are very slow

On computers without a usable graphics card, the AI runs on the processor. Try these:

- In **Settings → General → Chat mode**, choose **Simple**, or leave it on **Auto**.
- Use a smaller model, such as Qwen3 1.7B (**Settings → Model**).
- Close other heavy programs to free memory.

The first answer after starting the app takes longest, because the model is loaded and the instructions are read first.

## The app stays on "Finding my focus…" for a long time

This is the model loading. On older computers it can take several minutes. If the AI engine stops while loading, Khaled Chat tries again without the graphics card.

## A download was interrupted

Khaled Chat never resumes a download by itself. Open the app and choose **Resume download…**. It continues from where it stopped, after you confirm again.

## Not enough disk space

Free some space, or remove models you don't use (**Settings → Model**). **Settings → Files & storage** shows what uses the space.

## A feature says "Not available in this version"

Some optional parts are held back in 0.1.0:

- **Code tools** on Windows, until running code can be isolated well enough;
- **Web search**, while its licensing is reviewed.

See the [changelog](/changelog/).

## Reporting a problem

Report problems through [GitHub issues](https://github.com/Elomami1976/khaledchat-desktop/issues), or by email via the [Contact page](/contact/). Describe what happened, and include the information from **Settings → Hardware** and the version from **Settings → About**.
