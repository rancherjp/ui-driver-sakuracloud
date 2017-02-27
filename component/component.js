let REGIONS = [
  "is1a",
  "is1b",
  "tk1a",
];

let DISKPLAN =
[
  {
    "displayName": "HDD",
    "plan": "2",
  },
  {
    "displayName": "SSD",
    "plan": "4",
  }
];

let DISKCONNECTION = [
  "virtio",
  "ide",
];

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: '%%DRIVERNAME%%',
    %%DRIVERNAME%%Config: Ember.computed.alias('model.%%DRIVERNAME%%Config'),
    regionChoices        : REGIONS,
    diskPlanChoices      : DISKPLAN,
    diskConnectionChoices: DISKCONNECTION,

/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = this.get('store').createRecord({
        type                : '%%DRIVERNAME%%Config',
        region              : 'is1a',
        accessToken         : '',
        accessTokenSecret   : '',
        core                : '1',
        memorySize          : '',
        diskName            : 'disk001',
        diskPlan            : '4',
        diskSize            : '20480',
        diskConnection      : 'virtio',
        connectedSwitch     : '',
        dnsZone             : '',
        privateIp           : '',
        privateSubnetMask   : '255.255.255.0',
        packetFilter        : '',
        privatePacketFilter : '',
        gateway             : '',
        gslb                : '',
        sshKey              : '',
        privateIpOnly       : '',
        autoReboot          : '',
        enablePasswordAuth  : '',
      });

      this.set('model', this.get('store').createRecord({
        type: 'host',
        '%%DRIVERNAME%%Config': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      // Add more specific errors

      // Check empty value for access/secret token
      let accessToken = this.get('%%DRIVERNAME%%Config.accessToken');
      if ( accessToken == null ) {
        errors.push('アクセストークンは必須です');
      }

      let accessTokenSecret = this.get('%%DRIVERNAME%%Config.accessTokenSecret');
      if ( accessTokenSecret == null ) {
        errors.push('シークレットトークンは必須です');
      }

      // Check IP address
      let privateIp = this.get('%%DRIVERNAME%%Config.privateIp');
      let gateway   = this.get('%%DRIVERNAME%%Config.gateway');
      //if ( privateIp.match(/[^0-9].[0-9] ) {
      //  errors.push('IP アドレスが間違っています');
      //}

      // Check netmask
      let netmask = this.get('%%DRIVERNAME%%Config.netmask');
      //if ( privateIp.match(/[^0-9].[0-9] ) {
      //  errors.push('ネットマスクが間違っています');
      //}

      // Check something and add an error entry if it fails:
      //if ( parseInt(this.get('model.%%DRIVERNAME%%Config.size'),10) < 1024 )
      //{
      //  errors.push('Size must be at least 1024 MB');
      //}

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( errors.get('length') )
      {
        this.set('errors', errors);
        return false;
      }
      else
      {
        this.set('errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
