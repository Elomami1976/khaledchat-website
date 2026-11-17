> Written for Khaled Chat 0.1.1.

## What Khaled Chat checks

On first launch, Khaled Chat checks your computer:

- memory (RAM);
- processor and its number of threads;
- graphics card and its memory (VRAM);
- whether the AI engine can use the graphics card (NVIDIA CUDA or Vulkan);
- free disk space.

You can see the results at any time in **Settings → Hardware**. They stay on your computer.

## How this affects models

The recommendation is based on these results. Models that won't fit in your computer's memory are listed but can't be selected. The [Features page](/features/#models) shows roughly which computers each model suits.

## Computers without a usable graphics card

The AI then runs on the processor alone. That works, but it is slower.

On older processors, Khaled Chat uses **Simple chat mode** automatically: a short set of instructions, no file or tool features, and brief thinking. On a 2011 laptop processor (Intel Core i5-2450M, 8 GB) with Qwen3 1.7B, the first answer arrived in about 1–2.5 minutes in Simple mode, against 10–12 minutes in Full mode.

You can change this in **Settings → General → Chat mode**:

- **Auto:** Simple when no graphics acceleration is found.
- **Simple:** always.
- **Full:** files, tools and projects.

## Computers with a graphics card

With an NVIDIA graphics card (CUDA), or one that supports Vulkan, models run much faster and bigger models become practical. Version 0.1.1 has not yet been measured on computers with graphics cards.

## Memory

- **8 GB**: The small models, Qwen3 1.7B or Gemma 4 E2B
- **16 GB**: Gemma 4 E4B
- **24 GB or more, or a strong graphics card**: The 20B and 26B models

## Disk space

Leave room for the model you choose (1.8–63 GB), plus a little extra while it downloads. Khaled Chat checks the free space before it starts.
