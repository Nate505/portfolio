BEFORE STARTING

Make sure to update inventory.ini with your EC2 public IP:
[app_servers]
ec2 ansible_host=<EC2_PUBLIC_IP> ansible_user=ubuntu ansible_ssh_private_key_file=/home/<user>/.ssh/<key>.pem


TO RUN:
ansible-playbook site.yml

TO CHECK STATUS:
ansible app_servers -b -m shell -a "pm2 list"

To access the application:
http://<EC2_PUBLIC_IP>:3000

VERIFY PM2 RUNS ON BOOT
Reboot:
ansible app_servers -b -m shell -a "reboot"

After reboot (wait a couple of seconds):
ansible app_servers -m ping
ansible app_servers -b -m shell -a "pm2 list"


