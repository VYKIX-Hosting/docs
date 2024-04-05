---
id: setup-firewall-RDC-SSH
title: Setup firewall for RDC or SSH
description: How to setup firewall for Remote Desktop Connection or SSH
---

At VYKIX, we want to prioritize the security of your network. Securing Remote Desktop (RDP) and SSH ports is essential to protect your server against threats. Follow this comprehensive guide to enhance the security of your server.

**Step 1:** Configure Remote Desktop (RDP) Access

**RDP Port:** By default, Remote Desktop Protocol (RDP) uses TCP port 3389. Ensure that your RDP is configured to use this standard port.
**Firewall Rules:** Create a firewall rule to allow traffic on port 3389 and add a TCP Service (symmetric) filter as shown below. In addition, you can restrict access to trusted IP addresses (Source IP) and employ strong password policies.
**Network-Level Authentication:** Enable Network-Level Authentication (NLA) for RDP. NLA enhances security by requiring users to authenticate before connecting.

![Image 1 - Firewall Manager](https://i.imgur.com/IB7EZR1.png)
![Image 2 - Firewall Manager](https://i.imgur.com/Od6xL7L.png)

**Step 2:** Secure SSH Access

**SSH Port:** Secure Shell (SSH) typically uses TCP port 22. Confirm that your SSH server is configured to use this port.
**Firewall Rules:** Establish firewall rules to permit traffic on port 22 and add a TCP Service (symmetric) filter as shown below. In addition, you can restrict access to trusted IP addresses (Source IP) and employ strong password policies.
**Key Authentication:** Consider using SSH key-based authentication, which is more secure than password-based authentication. Generate SSH keys, upload your public key to the server, and protect your private key.

![Image 3 - Firewall Manager](https://i.imgur.com/CNreG21.png)
![Image 4 - Firewall Manager](https://i.imgur.com/1FJJ5HB.png)

You can add an additional software to help you prevent bruteforce. For example, for linux, Fail2Ban.

Depending on the distribution you are using, the install command is `yum install fail2ban` or `apt install fail2ban`.
With the tool installed you can tune it be better for your use case.


**Step 3:** Regular Updates

**Operating System Updates:** Ensure that your server's operating system is current. Apply security patches and updates regularly to address vulnerabilities.
Software Updates: Update RDP and SSH software (e.g., OpenSSH for SSH). Newer versions often contain security improvements.

**Step 4:** Monitoring and Intrusion Detection

**Logging:** Enable detailed logging for RDP and SSH. Review logs regularly to detect and respond to any unusual activity.
Intrusion Detection: Implement intrusion detection systems to monitor for any suspicious access attempts and automatically block potential threats.

**Step 5:** Strong Authentication

**RDP:** Use strong, complex passwords for RDP authentication. Implement policies that enforce password complexity and regular password changes.
SSH: Implement key-based authentication for SSH access. This method is more secure than password authentication.
By following these steps, you can significantly enhance the security of your Remote Desktop (RDP) and SSH ports.

This guide now focuses exclusively on securing Remote Desktop and SSH ports (TCP 3389 and 22), providing users with a clear and detailed path to enhance the security of these critical services.