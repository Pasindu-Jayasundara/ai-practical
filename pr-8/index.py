import tkinter as tk

def test():
    print("FUN")

window = tk.Tk()
window.title("Hello")
window.geometry("500x250")

btn = tk.Button(window,text="hi",command=test)
btn.pack(padx=100,pady=100)

window.mainloop()