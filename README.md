Process to run the services in the kubernetes

Clone the Repository to your local machine
$cd app

Building and Pushing the image
$docker build -t  <account>/app:latest .
$docker push <account>/app:latest


Testing the app locally using docker
$docker run -p 49160:8080 -d <account>/app:latest
$curl localhost:49160/cart

Running helm 
$cd app
$helm install <app-name> .

#Kubefwd the Services

Get the application URL by running these commands:
  sh ```export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services service-app)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT
```

sudo -E  kubefwd services 

run this service in browser
service-app:8080


Getting k8s Resources
$kubectl get deploy,po,svc
