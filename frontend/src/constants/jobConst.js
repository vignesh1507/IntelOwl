/* eslint-disable id-length */
// ignored min length of variables because some file extensions are only 2 characters

// IMPORTANT - do not change the order of status
export const JobStatuses = Object.freeze({
  PENDING: "pending",
  RUNNING: "running",
  ANALYZERS_RUNNING: "analyzers_running",
  ANALYZERS_COMPLETED: "analyzers_completed",
  CONNECTORS_RUNNING: "connectors_running",
  CONNECTORS_COMPLETED: "connectors_completed",
  PIVOTS_RUNNING: "pivots_running",
  PIVOTS_COMPLETED: "pivots_completed",
  VISUALIZERS_RUNNING: "visualizers_running",
  VISUALIZERS_COMPLETED: "visualizers_completed",
  REPORTED_WITH_FAILS: "reported_with_fails",
  REPORTED_WITHOUT_FAILS: "reported_without_fails",
  KILLED: "killed",
  FAILED: "failed",
});

export const JobFinalStatuses = Object.freeze({
  REPORTED_WITH_FAILS: JobStatuses.REPORTED_WITH_FAILS,
  REPORTED_WITHOUT_FAILS: JobStatuses.REPORTED_WITHOUT_FAILS,
  KILLED: JobStatuses.KILLED,
  FAILED: JobStatuses.FAILED,
});

export const JobTypes = Object.freeze({
  FILE: "file",
  OBSERVABLE: "observable",
});

export const FileMimeTypes = Object.freeze({
  // IMPORTANT! in case you update this Object remember to update also the blackend
  WSCRIPT: "application/w-script-file",
  JAVASCRIPT1: "application/javascript",
  JAVASCRIPT2: "application/x-javascript",
  JAVASCRIPT3: "text/javascript",
  VB_SCRIPT: "application/x-vbscript",
  IQY: "text/x-ms-iqy",
  APK: "application/vnd.android.package-archive",
  DEX: "application/x-dex",
  ONE_NOTE: "application/onenote",
  ZIP1: "application/zip",
  ZIP2: "multipart/x-zip",
  JAVA: "application/java-archive",
  RTF1: "text/rtf",
  RTF2: "application/rtf",
  SHARED_LIB: "application/x-sharedlib",
  EXE: "application/vnd.microsoft.portable-executable",
  ELF: "application/x-elf",
  OCTET: "application/octet-stream",
  PCAP: "application/vnd.tcpdump.pcap",
  PDF: "application/pdf",
  HTML: "text/html",
  PUB: "application/x-mspublisher",
  EXCEL_MACRO1: "application/vnd.ms-excel.addin.macroEnabled",
  EXCEL_MACRO2: "application/vnd.ms-excel.sheet.macroEnabled.12",
  EXCEL1: "application/vnd.ms-excel",
  EXCEL2: "application/excel",
  DOC: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  XML1: "application/xml",
  XML2: "text/xml",
  ENCRYPTED: "application/encrypted",
  PLAIN: "text/plain",
  CSV: "text/csv",
  PPTX: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  WORD1: "application/msword",
  WORD2:
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  POWERPOINT: "application/vnd.ms-powerpoint",
  OFFICE: "application/vnd.ms-office",
  BINARY: "application/x-binary",
  MAC1: "application/x-macbinary",
  MAC2: "application/mac-binary",
  MAC3: "application/x-mach-binary",
  COMPRESS1: "application/x-zip-compressed",
  COMPRESS2: "application/x-compressed",
  OUTLOOK: "application/vnd.ms-outlook",
  EML: "message/rfc822",
  PKCS7: "application/pkcs7-signature",
  XPKCS7: "application/x-pkcs7-signature",
  MIXED: "multipart/mixed",
  X_SHELLSCRIPT: "text/x-shellscript",
  CRX: "application/x-chrome-extension",
  JSON: "application/json",
  EXECUTABLE: "application/x-executable",

  JAVA2: "text/x-java",
  KOTLIN: "text/x-kotlin",
  SWIFT: "text/x-swift",
  OBJECTIVE_C_CODE: "text/x-objective-c",
});

export const ObservableClassifications = Object.freeze({
  IP: "ip",
  URL: "url",
  DOMAIN: "domain",
  HASH: "hash",
  GENERIC: "generic",
});

export const FileExtensions = Object.freeze({
  DOC: "doc",
  XLS: "xls",
  XLSB: "xlsb",
  XLAM: "xlam",
  XLSM: "xlsm",
  XLSX: "xlsx",
  XLTM: "xltm",
  XML: "xml",
  TXT: "txt",
  EXE: "exe",
  PPT: "ppt",
  PDF: "pdf",
  DOCX: "docx",
  DAT: "dat",
  PNG: "png",
  YARN: "yarn",
  JPG: "jpg",
  JPEG: "jpeg",
  JAR: "jar",
  JS: "js",
  GZ: "gz",
  PKG: "pkg",
  DEB: "deb",
  BIN: "bin",
  LOG: "log",
  CSV: "csv",
  SQL: "sql",
  TAR: "tar",
  APK: "apk",
  BAT: "bat",
  PY: "py",
  WSF: "wsf",
  VB: "vb",
  GIF: "gif",
  ICO: "ico",
  TIFF: "tiff",
  TIF: "tif",
  ASP: "asp",
  HTML: "html",
  CSS: "css",
  JSP: "jsp",
  PHP: "php",
  RSS: "rss",
  CPP: "cpp",
  PPTX: "pptx",
  JAVA: "java",
  ODS: "ods",
  BAK: "bak",
  CFG: "cfg",
  DLL: "dll",
  INI: "ini",
  MSI: "msi",
  TMP: "tmp",
  RTF: "rtf",
  VBS: "vbs",
  JSON: "json",
  SCR: "scr",
  CLASS: "class",
  SLK: "slk",
  IQY: "iqy",
  HTTP: "http",
  JSE: "jse",
  VBE: "vbe",
  PS1: "ps1",
  PS: "ps",
  YML: "yml",
  YAML: "yaml",
  SRC: "src",
  HTA: "hta",
  PUB: "pub",
  HTTPS: "https",
  SYS: "sys",
  EML: "eml",
  CAB: "cab",
  DC: "dc",
  CMD: "cmd",
  INIT: "init",
  LNK: "lnk",
  CORE: "core",
  DOCM: "docm",
  HWP: "hwp",
  OK: "ok",
  PUBLICVM: "publicvm",
  ISO: "iso",
  CRX: "crx",
  CONFIG: "config",
  /* This is a list of valid tld that are also file extnesions.
  This could generate some false positives in the auto-extraction, if they are too much filter them.
  sh
  */
});

export const InvalidTLD = Object.freeze({
  IP: "ip",
  DOMAIN: "domain",
  PORT: "port",
  PATH: "path",
  NAME: "name",
});
