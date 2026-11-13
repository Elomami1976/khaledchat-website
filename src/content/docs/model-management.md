> Model management screens are in development. This section will be updated with exact steps once verified.

## Understanding local AI models

A local AI model is a file containing the trained weights of a language model. Running it on your computer means your prompts are processed locally. Models differ in size, speed, and capabilities: some handle only text, others can also understand images.

As a general rule, larger models need more memory and produce higher-quality responses, while smaller models are faster and work on more computers.

## Downloading models

Khaled Chat recommends models that suit your hardware. Each model needs to be downloaded once, and only after you confirm it: the confirmation shows the size, source, destination folder and license.

The built-in catalog has 8 chat models:

- **Qwen3 1.7B**: 1.83 GB, for 8 GB computers and older processors (tested in Khaled Chat)
- **Gemma 4 E2B**: 3.35 GB
- **Gemma 4 E4B Compact**: 3.86 GB
- **Gemma 4 E4B**: 5.15 GB
- **Gemma 4 26B Compact**: 9.66 GB
- **gpt-oss 20B**: 12.11 GB
- **Gemma 4 26B**: 14.44 GB
- **gpt-oss 120B**: 63.39 GB, for high-end workstations

All are Apache-2.0 licensed. See the full table with rough hardware fit on the [Features page](/features/#models).

## Importing local model files

Importing a model file you already have is a planned capability. Supported formats will be listed here when available.

## Switching models

You will be able to switch between installed models. Some features depend on the active model; for example, image understanding requires a vision-capable model.

## Removing unused models

Model files can take up a lot of disk space. Removing a model you no longer use frees that space. You can download it again later.
