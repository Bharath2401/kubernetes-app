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


####monitoring above app
Kubectl create namespace Kubernetes-monitoring  

# Add Prometheus-community repo
helm repo add Prometheus-community \
https://prometheus-community.github.io/helm-charts

# To update the helm repo 
 Helm update repo
 
# Deploying Helm Charts to Created Namespace
 helm install monitoring prometheus-community/Kube-prometheus-stack \
 --namespace Kubernetes-monitoring
 
 
 kubectl get pods -n Kubernetes-monitoring
 
 
 
 kubectl get svc -n Kubernetes-monitoring
 
 kubectl port-forward svc/monitoring-kube-prometheus-prometheus \
-n monitoring 9090

# to check if the KMS Tools is running 
kubectl get svc -n kubernetes-monitoring | grep kube-state-metrics

kubectl port-forward svc/monitoring-kube-state-metrics -n monitoring 8080 

kubectl port-forward svc/prometheus-kube-state-metrics -n \
monitoring 8085:80 


# Monitoring and Visualizing with Grafana Dashboards
kubectl get secret -n kubernetes-monitoring monitoring-grafana -o yaml


# username and password

echo admin-username | base64 --decode



kubectl port-forward svc/monitoring-grafana -n kubernetes-monitoring 3001:80


echo admin-user | base64 --decode
