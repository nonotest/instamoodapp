Use google cloud command.

Make sure your stuff is in the same some.
One off

```
us-central1
us-east1
us-east4
europe-west1
europe-west2
europe-west3
asia-northeast1
asia-east2
asia-south1
```

Then [instamooddev] is our machine name
[us-central1-a] is our zone.

# Setup instance

```

gcloud compute instances create instamooddevr \
--image-project debian-cloud --image-family debian-10 \
--tags=allow-redis \
--zone=us-central1-a \
--private-network-ip=10.128.0.2 \
--machine-type=f1-micro \
--network default

```

# REDIS DOCK

```

gcloud compute instances create-with-container instamooddev \
--tags=allow-redis \
--zone=us-central1-a \
--private-network-ip=10.128.0.2 \
--container-image=registry.hub.docker.com/library/redis \
--machine-type=f1-micro \
--network default

gcloud compute instances delete-access-config instamooddev --zone=us-central1-a

gcloud compute firewall-rules create allow-redis --network default --allow tcp:6379

gcloud compute instances list
gcloud compute instances describe instamooddev --zone=us-central1-a

```

Note the private network ip usually (10.128.0.2)

# Enable vpcaccess API

```

gcloud services enable vpcaccess.googleapis.com

```

# Serverless connector

```

gcloud compute networks vpc-access connectors create cronmachine-connector \
--network default \
--region us-central1 \
--range 10.8.0.0/28 \
--min-throughput 200 \
--max-throughput 400

```

# IAM

Get project number

```

gcloud projects describe instamooddev

```

```

gcloud projects add-iam-policy-binding instamooddev \
--member=serviceAccount:service-462137033512@gcf-admin-robot.iam.gserviceaccount.com \
--role=roles/viewer

gcloud projects add-iam-policy-binding instamooddev \
--member=serviceAccount:service-462137033512@gcf-admin-robot.iam.gserviceaccount.com \
--role=roles/compute.networkUser

```

```

VPC_CONNECTOR=projects/instamooddev/locations/us-central1/connectors/cronmachine-connector

```

# CP

```
docker cp feedme  aafa190fefee:/data
```

ca-certificates
