#!/usr/bin/python3

if __name__ == "__main__":
import sys
    
argv = sys.argv[1:]
    
if len(argv) == 0:
    print("Number of argument(s): 0.")
elif len(argv) == 1:
    print("Number of argument(s): 1. Argument:")
else:
    print("Number of argument(s):", len(argv), "arguments:")
for i, arg in enumerate(argv, start=1):
    print(i, ":", arg)
