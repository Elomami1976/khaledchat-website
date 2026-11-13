> Khaled Chat is in development and has not been released. This section describes the intended behavior. Specific minimum requirements will be published only after they have been verified through benchmarking.

## RAM and available memory

A model must fit in memory to run. The amount of free memory, not just the total installed, determines which models can run comfortably. Closing other memory-intensive applications can help.

## CPU performance

Every supported computer can run models on its processor. Processor speed and core count affect how quickly responses are generated.

## GPU acceleration

A compatible graphics card can make responses much faster. When no supported GPU is available, Khaled Chat is designed to use the processor instead.

## VRAM

Video memory on a graphics card limits which models can be fully accelerated by the GPU. Models larger than the available VRAM may run partially on the processor, which is slower.

## Storage requirements

Each installed model occupies disk space. Make sure you have enough free storage for the models you want to keep.

## Unsupported features

Some features need more resources or a specific model type. For example, image analysis requires a vision-capable model and additional memory. When a feature is not supported on your computer, Khaled Chat is designed to explain why instead of failing unexpectedly.
