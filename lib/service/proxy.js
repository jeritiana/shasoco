var service = module.exports = {};

service.name = "proxy";
service.composeFile = "proxy.yml";
service.computes = [ "proxy", "proxyssh" ];
service.volumes = [];
