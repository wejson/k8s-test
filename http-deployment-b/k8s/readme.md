# commands

###connect the build to minikube docker daemon

Please note all should be done in the same terminal!

```
eval $(minikube docker-env)
```

build service a in minikube docker daemon

```
docker build -t test/service-b .
```

validate service is built in minikube
this should print the test/service-b tag in the docker images list
```
minikube ssh
docker images
```

deploy the service to k8s

```
kubectl apply -f ./service-b-deployment.yml
```

validate deployment status

```
kubectl get pods 
```
