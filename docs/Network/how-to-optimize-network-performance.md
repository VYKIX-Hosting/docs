---
id: how-to-optimize-network-performance
title: How to optimize network performance
description: How to optimize your network performance (MTU)
---


In networking, the **Maximum Transmission Unit (MTU)** holds the key to efficient data transmission across the internet. Setting the correct MTU value ensures seamless network performance for VYKIX services. 

This comprehensive guide will walk you through adjusting MTU settings on **Windows** and **Linux** systems.

# Changing MTU in Windows:

**Step 1:** Open Command Prompt as Administrator

Begin by launching Command Prompt with administrator privileges. Press "Win + X" on your keyboard and select either "Windows Terminal (Admin)" or "Command Prompt (Admin)."

**Step 2:** Identify Your Network Adapter

Execute the command netsh interface ipv4 show subinterfaces and press Enter. Identify your network adapter's name (e.g., "Ethernet" or "Wi-Fi").

**Step 3:** Change MTU Value

Execute the following command, replacing "YourNetworkAdapter" with the name identified in step 2:

`netsh interface ipv4 set subinterface "YourNetworkAdapter" mtu=1476 store=persistent`

Press Enter to apply the new MTU value (1476). The "store=persistent" parameter ensures the change persists after a reboot.

**Step 4:** Restart Your Server

Restart your server to activate the new MTU setting.

**Step 5:** Verify MTU Change

Confirm the MTU adjustment with the command:

`netsh interface ipv4 show subinterfaces`

# Changing MTU in Linux:

**Step 1:** Open Terminal

Launch your terminal application, ensuring you have administrative privileges (use sudo before each command if needed).

**Step 2:** Identify Your Network Interface

Use the following command to identify your network interface:

`ip a`

Note the name of your network interface (e.g., "eth0" or "ens33").

**Step 3:** Change MTU Value

Set the MTU value to 1476 with the command below, replacing "YourNetworkInterface" with the name from step 2:

`sudo ip link set dev YourNetworkInterface mtu 1476`

**Step 4:** Verify MTU Change

Confirm the MTU adjustment with:

`ip a | grep YourNetworkInterface`

Following these steps, you can effortlessly fine-tune MTU settings for your Windows or Linux system, optimizing network performance for VYKIX services. Remember to replace **"YourNetworkAdapter"** or **"YourNetworkInterface"** with the actual name of your network adapter or interface.