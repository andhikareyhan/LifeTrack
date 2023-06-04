import tkinter as tk
import serial as sr
import numpy as np
from matplotlib.backends.backend_tkagg import (FigureCanvasTkAgg)
from matplotlib.figure import Figure
import matplotlib.animation as animation

data = np.array([])
i = 0

arduino1_port = 'COM5'
arduino1 = sr.Serial(arduino1_port, 38400)

# -----plot data-----
def update_data5():
    global data
    global i

    a1 = arduino2.readline().decode()
    a2 = arduino2.readline().decode()
    
    if (a1[0] == 'B'):
        a1 = a1.rstrip()
        label1.config(text=a1[4:])
        
        if a2:
            try:
                b = float(a2)
    
                if(len(data) < 300):
                    data = np.append(data, b)
                else:
                    data[0:299] = data[1:300]
                    data[299] = b
    
            except ValueError:
                print("Invalid float value")
    
    elif (a2[0] == 'B'):
        a2 = a2.rstrip()
        label1.config(text=a2[4:])
        
        if a1:
            try:
                b = float(a1)
    
                if(len(data) < 300):
                    data = np.append(data, b)
                else:
                    data[0:299] = data[1:300]
                    data[299] = b
    
            except ValueError:
                print("Invalid float value")
                
    else:
        if a2:
            try:
                b = float(a2)
    
                if(len(data) < 300):
                    data = np.append(data, b)
                else:
                    data[0:299] = data[1:300]
                    data[299] = b
    
            except ValueError:
                print("Invalid float value")
        
    if (i == 125):
        # Read data from the Arduino
        transit1 = arduino1.readline().decode().strip()  # Assuming the data is sent as text
        transit2 = arduino1.readline().decode().strip()
        # Update the GUI with the new data
        if (transit1[0] == 'S'):
            label4.config(text=transit1[5:])
            if (transit2[0] == 'T'):
                label3.config(text=transit2[12:])
        else:
            label3.config(text=transit1[12:])
            label4.config(text=transit2[5:])
        i = 0
    else:
        i += 1

# -----animation update function-----
def update_plot(frame):
    update_data5()

    lines.set_xdata(np.arange(0, len(data)))
    lines.set_ydata(data)

    return lines,


root = tk.Tk()  # create root window
root.title("LifeTrack-Patient-Monitor")  # title of the GUI window
root.maxsize(1024, 600)  # specify the max size the window can expand to
root.config(bg="skyblue")  # specify background color

# Create left and right frames
right1_frame = tk.Frame(root, width=400, height=100, bg='grey')
right1_frame.grid(row=0, column=1, padx=1, pady=5)

right2_frame = tk.Frame(root, width=400, height=100, bg='grey')
right2_frame.grid(row=1, column=1, padx=1, pady=5)

right3_frame = tk.Frame(root, width=400, height=100, bg='grey')
right3_frame.grid(row=2, column=1, padx=1, pady=5)

right4_frame = tk.Frame(root, width=400, height=100, bg='grey')
right4_frame.grid(row=3, column=1, padx=1, pady=5)

left_frame = tk.Frame(root, width=650, height=500, bg='grey')
left_frame.grid(row=0, column=0, rowspan=8, padx=10, pady=15)

# Create frames and labels in left_frame
tk.Label(right1_frame, text="HEART BPM", font=("Arial", 16), width=20, height=1).grid(row=0, column=0, padx=5, pady=5)
tk.Label(right2_frame, text="BLOOD PRESSURE", font=("Arial", 16), width=20, height=1).grid(row=0, column=0, padx=5, pady=5)
tk.Label(right3_frame, text="TEMPERATURE", font=("Arial", 16), width=20, height=1).grid(row=0, column=0, padx=5, pady=5)
tk.Label(right4_frame, text="OXYGEN SATURATION", font=("Arial", 16), width=20, height=1).grid(row=0, column=0, padx=5, pady=5)

# Create tool bar frame 1
tool_bar1 = tk.Frame(right1_frame, width=400, height=145, bg='blue')
tool_bar1.grid(row=1, column=0, padx=5, pady=(0,5))

label1 = tk.Label(tool_bar1, font=("Arial", 16), width=19)
label1.grid(padx=7, pady=7)

# Create tool bar frame 2
tool_bar2 = tk.Frame(right2_frame, width=400, height=145, bg='blue')
tool_bar2.grid(row=1, column=0, padx=5, pady=(0,5))

label21 = tk.Label(tool_bar2, text="MAP: 84", font=("Arial", 16), width=19)
label21.grid(padx=7, pady=7)

label21 = tk.Label(tool_bar2, text="Sistole: 127", font=("Arial", 16), width=19)
label21.grid(padx=7, pady=7)

label21 = tk.Label(tool_bar2, text="Diastole: 98", font=("Arial", 16), width=19)
label21.grid(padx=7, pady=7)

# Create tool bar frame 3
tool_bar3 = tk.Frame(right3_frame, width=400, height=145, bg='blue')
tool_bar3.grid(row=1, column=0, padx=5, pady=(0,5))

label3 = tk.Label(tool_bar3, font=("Arial", 16), width=19)
label3.grid(padx=7, pady=7)

# Create tool bar frame 4
tool_bar4 = tk.Frame(right4_frame, width=400, height=145, bg='blue')
tool_bar4.grid(row=1, column=0, padx=5, pady=(0,5))

label4 = tk.Label(tool_bar4, font=("Arial", 16), width=19)
label4.grid(padx=7, pady=7)

# add figure canvas
fig = Figure()
ax = fig.add_subplot(111)

ax.set_title('Lead I')
ax.set_xlabel('Sample')
ax.set_ylabel('x10\u207B\u2074 mV')
ax.set_xlim(0, 300)
ax.set_ylim(-10000, 15000)
lines = ax.plot([],[])[0]

canvas = FigureCanvasTkAgg(fig, master=root)  # A tk.DrawingArea.
canvas.get_tk_widget().place(x=10, y=15, width=650, height=500)
canvas.draw()

# Start updating the data

arduino2_port = 'COM10'
arduino2 = sr.Serial(arduino2_port, 38400)
arduino2.reset_input_buffer()

# Start the GUI main loop
ani = animation.FuncAnimation(fig, update_plot, frames=300, interval=1, blit=True)

root.mainloop()
