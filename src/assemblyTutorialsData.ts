import { TutorialTopic } from './cssTutorialsData';

export const ASSEMBLY_TOPICS: TutorialTopic[] = [
  {
    id: 'asm-home',
    title: 'Assembly HOME',
    description: 'Welcome to Assembly Language! Assembly is a low-level programming language specific to a computer architecture.',
    explanation: [
      'Assembly language translates directly to machine code instructions.',
      'Allows developers to directly manipulate CPU registers, memory addresses, and hardware interrupts.',
      'It is highly CPU-specific (e.g., x86, x86_64, ARM, MIPS).'
    ],
    code: `; x86_64 Assembly Hello World (Linux NASM)
section .data
    msg db "Hello, Assembly!", 10

section .text
    global _start

_start:
    ; write syscall
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 17
    syscall

    ; exit syscall
    mov rax, 60
    xor rdi, rdi
    syscall`,
    languageId: 'assembly'
  },
  {
    id: 'asm-intro',
    title: 'Assembly Intro',
    description: 'Learn why Assembly is crucial for compiler design, embedded systems, and driver development.',
    explanation: [
      'Provides absolute execution speed and hardware control.',
      'Helps developers understand exactly how CPUs execute instructions, manage caches, and parse stacks.'
    ],
    code: `; Assembly code has zero runtime overhead!`,
    languageId: 'assembly'
  },
  {
    id: 'asm-get-started',
    title: 'Assembly Get Started',
    description: 'Install assemblers like NASM or MASM and link programs using standard linkers.',
    explanation: [
      'NASM (Netwide Assembler) is popular for x86/x86_64 on Linux/macOS.',
      'Compile using: nasm -f elf64 main.asm -o main.o.',
      'Link object files into executables using: ld main.o -o main.'
    ],
    code: `; Commands:
; nasm -f elf64 app.asm
; ld app.o -o app
; ./app`,
    languageId: 'assembly'
  },
  {
    id: 'asm-environment',
    title: 'Assembly Environment',
    description: 'Configure virtualization sandboxes, registers viewers, and emulators.',
    explanation: [
      'Use tools like gdb (GNU Debugger) to step through instructions line by line.',
      'View registers in real-time to watch pointers shift and carry flags activate.'
    ],
    code: `; Use 'layout regs' inside gdb to watch registers shift!`,
    languageId: 'assembly'
  },
  {
    id: 'asm-syntax',
    title: 'Assembly Syntax',
    description: 'Understand NASM syntax formats, label targets, and comments.',
    explanation: [
      'An assembly program consists of three types of statements: Instructions, Assembler Directives, and Macros.',
      'Instructions are written in the form: [label] mnemonic [operands].',
      'Comments begin with a semicolon (;).'
    ],
    code: `_start:
    mov eax, 1 ; Mnemonic: mov, Operands: eax (destination), 1 (source)`,
    languageId: 'assembly'
  },
  {
    id: 'asm-memory-segments',
    title: 'Assembly Memory Segments',
    description: 'Explore section .text, section .data, and section .bss.',
    explanation: [
      '.text holds the actual executable CPU instructions.',
      '.data holds initialized variables (strings, arrays).',
      '.bss (Block Started by Symbol) holds uninitialized static variables.'
    ],
    code: `section .data
    count dw 500

section .bss
    buffer resb 1024 ; reserve 1024 bytes

section .text
    ; code goes here`,
    languageId: 'assembly'
  },
  {
    id: 'asm-registers',
    title: 'Assembly Registers',
    description: 'Master general-purpose, segment, index, and status flag registers.',
    explanation: [
      'Processor registers are ultra-fast memory cells inside the CPU chip.',
      'General purpose: RAX (Accumulator), RBX (Base), RCX (Counter), RDX (Data).',
      'Pointer registers: RSP (Stack Pointer), RBP (Base Pointer).'
    ],
    code: `; Accumulate sum using rax:
mov rax, 10
add rax, 20 ; rax now holds 30`,
    languageId: 'assembly'
  },
  {
    id: 'asm-system-calls',
    title: 'Assembly System Calls',
    description: 'Call the kernel using "sys_write" and "sys_exit" interrupts.',
    explanation: [
      'System calls (syscalls) are APIs provided by the operating system kernel.',
      'In x86_64 Linux, load the syscall number in RAX and execute the instruction: syscall.'
    ],
    code: `; Exit program with status code 0
mov rax, 60  ; sys_exit number
mov rdi, 0   ; status code
syscall`,
    languageId: 'assembly'
  },
  {
    id: 'asm-addressing-modes',
    title: 'Assembly Addressing Modes',
    description: 'Understand register, immediate, and memory displacement addressing modes.',
    explanation: [
      'Immediate addressing: Operand is a constant value (e.g., mov ax, 42).',
      'Register addressing: Operand is a register (e.g., mov ax, bx).',
      'Indirect memory addressing: Operand points to a memory location in brackets (e.g., mov ax, [addr]).'
    ],
    code: `mov ebx, [my_variable_address] ; Load value from memory`,
    languageId: 'assembly'
  },
  {
    id: 'asm-variables',
    title: 'Assembly Variables',
    description: 'Define initialized variables: db, dw, dd, and dq.',
    explanation: [
      'db: Define Byte (1 byte).',
      'dw: Define Word (2 bytes).',
      'dd: Define Doubleword (4 bytes).',
      'dq: Define Quadword (8 bytes).'
    ],
    code: `section .data
    char_val db 'A'
    short_val dw 120
    large_val dq 9876543210`,
    languageId: 'assembly'
  },
  {
    id: 'asm-constants',
    title: 'Assembly Constants',
    description: 'Define static constant values using the EQU directive.',
    explanation: [
      'The EQU directive allows you to define constants similarly to #define in C.',
      'Constants do not consume memory space; they are replaced during compilation.'
    ],
    code: `PORT_NUMBER EQU 8080
mov ax, PORT_NUMBER`,
    languageId: 'assembly'
  },
  {
    id: 'asm-arithmetic',
    title: 'Assembly Arithmetic Instructions',
    description: 'Evaluate mathematics: add, sub, mul, div, inc, and dec.',
    explanation: [
      'add and sub perform addition and subtraction.',
      'inc and dec increment and decrement register values by 1.'
    ],
    code: `mov ecx, 5
inc ecx      ; ecx is now 6
sub ecx, 2   ; ecx is now 4`,
    languageId: 'assembly'
  },
  {
    id: 'asm-logical',
    title: 'Assembly Logical Instructions',
    description: 'Perform bitwise logical operations: and, or, xor, and not.',
    explanation: [
      'and, or, and xor modify bit sequences based on boolean operations.',
      'xor-ing a register with itself is the standard fast way to clear its value: xor rax, rax.'
    ],
    code: `xor rbx, rbx ; Clears rbx to 0
or rcx, 0xFF ; Set lower 8 bits of rcx to 1`,
    languageId: 'assembly'
  },
  {
    id: 'asm-conditions',
    title: 'Assembly Conditions & Jumps',
    description: 'Compare values using cmp and perform conditional jumps (je, jne, jg, jl).',
    explanation: [
      'The cmp instruction compares two operands by subtracting them in the background, updating status flags.',
      'Conditional jumps branch to labels based on these CPU status flags.'
    ],
    code: `cmp eax, ebx
je  equal_label ; Jump if equal
jg  greater_label ; Jump if eax > ebx`,
    languageId: 'assembly'
  },
  {
    id: 'asm-loops',
    title: 'Assembly Loops',
    description: 'Implement iteration using loop mnemonics and RCX counters.',
    explanation: [
      'The loop instruction uses the RCX register as a counter.',
      'On each iteration, loop automatically decrements RCX and jumps to the label if RCX is not 0.'
    ],
    code: `mov rcx, 10 ; Loop 10 times

my_loop:
    ; (perform loop body)
    loop my_loop ; Decrements rcx, loops if rcx != 0`,
    languageId: 'assembly'
  },
  {
    id: 'asm-numbers',
    title: 'Assembly Numbers',
    description: 'Handle ASCII digits and perform conversions to binary decimals.',
    explanation: [
      'Numbers are often stored in ASCII representation on inputs/outputs.',
      'To convert an ASCII single digit to binary integer, subtract character \'0\' (or decimal 48).'
    ],
    code: `mov al, '5'
sub al, '0' ; al now holds integer 5`,
    languageId: 'assembly'
  },
  {
    id: 'asm-strings',
    title: 'Assembly Strings',
    description: 'Manipulate text strings using index pointers.',
    explanation: [
      'Strings are arrays of bytes representing characters.',
      'Often terminated with a NULL byte (0) or tracked using fixed lengths.'
    ],
    code: `section .data
    msg db "Interactive String", 0`,
    languageId: 'assembly'
  },
  {
    id: 'asm-arrays',
    title: 'Assembly Arrays',
    description: 'Declare arrays and iterate using pointer offsets.',
    explanation: [
      'An array is stored in contiguous memory.',
      'Iterate indices by adding the byte width (e.g. add rdi, 4 for doubleword arrays) to the base pointer.'
    ],
    code: `section .data
    primes dd 2, 3, 5, 7, 11
    ; Access index 1 (element 3):
    ; mov eax, [primes + 4]`,
    languageId: 'assembly'
  },
  {
    id: 'asm-procedures',
    title: 'Assembly Procedures',
    description: 'Organize reusable logic using call, ret, and function labels.',
    explanation: [
      'Procedures are blocks of code that perform specific tasks.',
      'call pushes the return address onto the stack and jumps to the procedure.',
      'ret pops the address off the stack and returns flow to caller.'
    ],
    code: `calculate_sum:
    add eax, ebx
    ret

; Inside _start:
; call calculate_sum`,
    languageId: 'assembly'
  },
  {
    id: 'asm-recursion',
    title: 'Assembly Recursion',
    description: 'Utilize call stacks to execute recursive loops like factorials.',
    explanation: [
      'Recursive procedures call themselves.',
      'Must manage stack frames (RBP) cleanly to avoid buffer or stack overflows.'
    ],
    code: `factorial:
    ; recursive base case and stacking
    ret`,
    languageId: 'assembly'
  }
];
