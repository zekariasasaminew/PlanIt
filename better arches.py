import tkinter as tk
from tkinter import StringVar, OptionMenu

def on_dropdown_change(*args):
    selected_option = variable.get()
    print(f"Selected option: {selected_option}")
    
def drop_down(win):
    OPTIONS = ["BIOCHEMISTRY", "COMPUTER SCIENCE", "CHEMISTRY"]

    variable = StringVar(win)
    variable.set(OPTIONS[0]) # default value
    variable.trace("w", on_dropdown_change)

    w = OptionMenu(win, variable, *OPTIONS)
    w.place(x = 100, y = 100)

    win.mainloop()
def create_window():
    window = tk.Tk()
    window.title('Better Arches Augustana')
    window.geometry('500x500')
    window.configure(bg="white")
    
    return window
def main():
    #open file
    #window = create_window()
    #drop_down(window)
    f_in = open('majors_class.txt', 'r')
    major_intended = input('What major are you intending to pursue? ')
    class_taken = input('What classes have you taken? ')
    class_taken.lower()

    for line in f_in:
        major_list = line.split(',')
        major_name = major_list[0].lower()
        class_list = major_list[1:]
    #         print(f'{major_name}: classes: {class_list}')
        for num in range(len(class_list)):
            classes = class_list[num].lower()
            if major_intended == major_name:
                if class_taken != classes:
                    print(f'{classes}')
main()
