import tkinter as tk
import imageio as im
from tkinter.filedialog import askopenfilename

tk.Tk().withdraw()
filename = askopenfilename()
image = im.imread(filename)

height = len(image)
width = len(image[0])

binary = []

for y in range(len(image)):
    for x in range(len(image[y])):
        if image[y][x][0] == 0:
            binary.append([x, y])

bin_length = len(binary)

inverted = False
if len(binary) > height * width / 2:
    inverted = True
    for y in range(len(image)):
        for x in range(len(image[y])):
            if image[y][x][0] != 0:
                binary.append([x, y])

object_string = "{name:\"\", "
object_string += "height:" + str(height) + ", "
object_string += "width:" + str(width) + ", "
object_string += "inverted:" + str(inverted) + ", "
object_string += "pixels:["
for pixel in binary:
    object_string += "[" + str(pixel[0]) + "," + str(pixel[1]) + "],"
object_string = object_string[:-1]
object_string += "]}"

print(object_string)
print()
print("pixels in binary: " + str(bin_length))
if inverted:
    print("pixels in inverted binary: " + str(len(binary)))
