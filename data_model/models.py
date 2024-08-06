from django.contrib.postgres import fields as pg_fields
from django.db import models


class IETFReport(models.Model):
    rrname = models.CharField()
    rrtype = models.CharField()
    rdata = pg_fields.ArrayField(models.CharField())
    time_first = models.DateTimeField()
    time_last = models.DateTimeField()


class DomainDataModel(models.Model):
    evaluation = models.CharField(null=True)
    classification = models.CharField(
        null=True
    )  # HybridAnalysisObservable (verdict), BasicMaliciousDetector,
    # GoogleSafeBrowsing, Crowdsec
    ietf_report = models.ForeignKey(
        IETFReport, on_delete=models.CASCADE, null=True
    )  # pdns
    tranco_rank = models.IntegerField(null=True)  # Tranco
    related_url = models.URLField(
        null=True
    )  # Crowdsec (link), UrlHaus (external_references)
    threats = pg_fields.ArrayField(models.CharField(), null=True)  # GoogleSafeBrowsing


class IPDataModel(models.Model):
    evaluation = models.CharField(null=True)
    classification = models.CharField(
        null=True
    )  # Crowdsec, GreyNoise, HybridAnalysisObservable (verdict),
    # BasicMaliciousDetector, GoogleSafeBrowsing
    ietf_report = models.ForeignKey(
        IETFReport, on_delete=models.CASCADE, null=True
    )  # pdns
    asn = models.IntegerField(null=True)  # BGPRanking, MaxMind
    asn_rank = models.DecimalField(null=True)  # BGPRanking
    circl_pssl_certificates = models.JSONField(null=True)  # CIRCL_PSSL
    behavior = models.CharField(null=True)  # Crowdsec
    related_urls = pg_fields.ArrayField(
        models.URLField(), null=True
    )  # Crowdsec (link), UrlHaus (external_references)
    noise = models.BooleanField(null=True)  # GreyNoise
    riot = models.BooleanField(null=True)  # GreyNoise
    org_name = models.CharField(null=True)  # GreyNoise
    vx_family = models.CharField(null=True)  # HybridAnalysisObservable
    country = models.CharField(null=True)  # MaxMind, AbuseIPDB
    country_code = models.CharField(null=True)  # MaxMind, AbuseIPDB
    registered_country = models.CharField(null=True)  # MaxMind, AbuseIPDB
    registered_country_code = models.CharField(null=True)  # MaxMind, AbuseIPDB
    isp = models.CharField(null=True)  # AbuseIPDB
    threats = pg_fields.ArrayField(models.CharField(), null=True)  # GoogleSafeBrowsing
    is_anonymizer = models.BooleanField(null=True)  # TorProject, Crowdsec
    is_tor_exit_node = models.BooleanField(null=True)  # TorProject, Crowdsec


class FileDataModel(models.Model):
    evaluation = models.CharField(
        null=True
    )  # Cymru (found), Cuckoo (malscore), Intezer (verdict/sub_verdict),
    # Triage (analysis.score)
    classification_tags = pg_fields.ArrayField(
        models.CharField(), null=True
    )  # HybridAnalysisFileAnalyzer
    tags = pg_fields.ArrayField(
        models.CharField(), null=True
    )  # HybridAnalysisFileAnalyzer, MalwareBazaarFileAnalyzer, MwDB
    domains = pg_fields.ArrayField(
        models.CharField(), null=True
    )  # HybridAnalysisFileAnalyzer
    compromised_hosts = pg_fields.ArrayField(
        models.CharField(), null=True
    )  # HybridAnalysisFileAnalyzer
    related_urls = pg_fields.ArrayField(
        models.URLField(), null=True
    )  # Crowdsec (link), UrlHaus (external_references), BoxJs,
    # Cuckoo (result_url/permalink), Intezer (link/analysis_url),
    # MalwareBazaarFileAnalyzer (permalink/file_information.value), MwDB (permalink),
    # StringsInfo (data), Triage (permalink)
    signatures = pg_fields.ArrayField(
        models.CharField(), null=True
    )  # ClamAvFileAnalyzer, MalwareBazaarFileAnalyzer
    family = models.CharField(
        null=True
    )  # Intezer (family_name), Cuckoo, MwDB, Triage (analysis.family)
    yara_rules = pg_fields.ArrayField(
        models.JSONField(), null=True
    )  # MalwareBazaarFileAnalyzer
    comments = pg_fields.ArrayField(
        models.CharField(), null=True
    )  # MalwareBazaarFileAnalyzer(?)
    file_information = pg_fields.ArrayField(
        models.JSONField(), null=True
    )  # MalwareBazaarFileAnalyzer, OneNoteInfo
    # (files), QuarkEngineAPK (crimes.confidence, threat_level, total_score)
    # RtfInfo (exploit_equation_editor, exploit_ole2link_vuln)
    related_threats = pg_fields.ArrayField(
        models.CharField(), null=True
    )  # MalwareBazaarFileAnalyzer(?), QuarkEngineAPK (crimes.crime)
    peepdf_stats = pg_fields.ArrayField(models.JSONField(), null=True)  # PdfInfo
    pdfid_reports = pg_fields.ArrayField(models.JSONField(), null=True)  # PdfInfo
    imphash = models.CharField(null=True)  # PeInfo
    type = models.CharField(null=True)  # PeInfo
