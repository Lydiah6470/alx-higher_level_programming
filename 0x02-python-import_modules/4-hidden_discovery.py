#!/usr/bin/python3
if __name__ == "__main__":
    import hidden_4
    
    names = dir(hidden_4)
    for s in names:
        if s[:2] != "__":
            print(s)
