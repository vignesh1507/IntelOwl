from django.db import models


class DomainDataModel(models.Model):
    evaluation = models.CharField(null=True)
    classification = models.CharField(null=True)  # HybridAnalysisObservable (verdict)


class IPDataModel(models.Model):
    evaluation = models.CharField(null=True)
    asn = models.IntegerField(null=True)  # BGPRanking
    asn_rank = models.DecimalField(null=True)  # BGPRanking
    circl_pssl_certificates = models.JSONField(null=True)  # CIRCL_PSSL
    classification = models.CharField(
        null=True
    )  # Crowdsec, GreyNoise, HybridAnalysisObservable (verdict)
    behavior = models.CharField(null=True)  # Crowdsec
    link = models.URLField(null=True)  # Crowdsec
    noise = models.BooleanField(null=True)  # GreyNoise
    riot = models.BooleanField(null=True)  # GreyNoise
    org_name = models.CharField(null=True)  # GreyNoise
