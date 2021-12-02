import tkinter as tk
import imageio as im
from tkinter.filedialog import askopenfilename

tk.Tk().withdraw()
filename = askopenfilename()
image = im.imread(filename)
binary = [[0 for x in range(len(image[y]))] for y in range(len(image))]

for y in range(len(image)):
    for x in range(len(image[y])):
        if image[y][x][0] == 0:
            binary[y][x] = 1

print(binary)
