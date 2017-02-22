let REGIONS = [
  "is1a",
  "is1b",
  "tk1a",
];

let DISKPLAN = [
  "2",
  "4",
];

let DISKCONNECTION = [
  "virtio",
  "ide",
];

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-sakuracloud/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: 'sakuracloud',
    sakuracloudConfig: Ember.computed.alias('model.sakuracloudConfig'),
    regionChoices        : REGIONS,
    diskPlanChoices      : DISKPLAN,
    diskConnectionChoices: DISKCONNECTION,

/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = this.get('store').createRecord({
        type                : 'sakuracloudConfig',
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
        'sakuracloudConfig': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      // Add more specific errors

      // Check empty value for access/secret token
      let accessToken = this.get('sakuracloudConfig.accessToken');
      if ( accessToken == null ) {
        errors.push('アクセストークンは必須です');
      }

      let accessTokenSecret = this.get('sakuracloudConfig.accessTokenSecret');
      if ( accessTokenSecret == null ) {
        errors.push('シークレットトークンは必須です');
      }

      // Check IP address
      let privateIp = this.get('sakuracloudConfig.privateIp');
      let gateway   = this.get('sakuracloudConfig.gateway');
      //if ( privateIp.match(/[^0-9].[0-9] ) {
      //  errors.push('IP アドレスが間違っています');
      //}

      // Check netmask
      let netmask = this.get('sakuracloudConfig.netmask');
      //if ( privateIp.match(/[^0-9].[0-9] ) {
      //  errors.push('ネットマスクが間違っています');
      //}

      // Check something and add an error entry if it fails:
      //if ( parseInt(this.get('model.sakuracloudConfig.size'),10) < 1024 )
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
;
define("ui/components/machine/driver-sakuracloud/template",["exports","ember","ui/mixins/driver"],function(exports,_ember,_uiMixinsDriver){

exports["default"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.0",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 10
          },
          "end": {
            "line": 19,
            "column": 10
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'value');
        morphs[1] = dom.createAttrMorph(element1, 'selected');
        morphs[2] = dom.createMorphAt(element1,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","choice",["loc",[null,[18,28],[18,34]]],0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","model.sakuracloudConfig.region",["loc",[null,[18,51],[18,81]]],0,0,0,0],["get","choice",["loc",[null,[18,82],[18,88]]],0,0,0,0]],[],["loc",[null,[null,null],[18,90]]],0,0],0,0,0,0],
        ["content","choice",["loc",[null,[18,91],[18,101]]],0,0,0,0]
      ],
      locals: ["choice"],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.0",
        "loc": {
          "source": null,
          "start": {
            "line": 81,
            "column": 10
          },
          "end": {
            "line": 83,
            "column": 10
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createAttrMorph(element0, 'selected');
        morphs[2] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","choice",["loc",[null,[82,28],[82,34]]],0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","model.sakuracloudConfig.diskPlan",["loc",[null,[82,51],[82,83]]],0,0,0,0],["get","choice",["loc",[null,[82,84],[82,90]]],0,0,0,0]],[],["loc",[null,[null,null],[82,92]]],0,0],0,0,0,0],
        ["content","choice",["loc",[null,[82,93],[82,103]]],0,0,0,0]
      ],
      locals: ["choice"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.9.0",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 202,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","horizontal-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("アカウントアクセス");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("リージョン");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("アクセストークン*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("シークレットトークン*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("インスタンス");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("CPUコア数");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("メモリ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("ディスク名");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("ディスクプラン");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("ネットワーク");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("スイッチ/ルーター ID");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("DNSゾーン");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("プライベート IP");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("サブネットマスク");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("パケットフィルター ID(eth0)");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("eth0: 共有セグメント");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("パケットフィルター ID(eth1)");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("eth1: プライベートセグメント");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("ゲートウェイ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("eth1を利用する場合は必須となります");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("GSLB名");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("存在しない場合は新規作成されます");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("SSH キー");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-8");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("省略した場合は新規にキーペアが生成されます");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("オプション");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("table");
      dom.setAttribute(el3,"style","margin: 0 auto;");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      dom.setAttribute(el5,"style","padding: 0 10px;");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","form-label checkbox");
      var el7 = dom.createTextNode("\n              ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" 公開セグメントのNICを無効にしeth1のみを使う");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      dom.setAttribute(el5,"style","padding: 0 10px;");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","form-label checkbox");
      var el7 = dom.createTextNode("\n              ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" @auto-reboot 特殊タグ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      dom.setAttribute(el5,"style","padding: 0 10px;");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","form-label checkbox");
      var el7 = dom.createTextNode("\n              ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" パスワード認証を有効化する");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element3, [7, 3, 1]);
      var element5 = dom.childAt(element3, [15]);
      var element6 = dom.childAt(element3, [17]);
      var element7 = dom.childAt(element6, [7, 1]);
      var element8 = dom.childAt(element3, [21]);
      var element9 = dom.childAt(element3, [23]);
      var element10 = dom.childAt(element3, [25]);
      var element11 = dom.childAt(element3, [27]);
      var element12 = dom.childAt(element3, [33, 1]);
      var morphs = new Array(25);
      morphs[0] = dom.createMorphAt(element3,2,2);
      morphs[1] = dom.createAttrMorph(element4, 'onchange');
      morphs[2] = dom.createMorphAt(element4,1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element3, [9, 3]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element3, [11, 3]),1,1);
      morphs[5] = dom.createMorphAt(dom.childAt(element5, [3]),1,1);
      morphs[6] = dom.createMorphAt(dom.childAt(element5, [7]),1,1);
      morphs[7] = dom.createMorphAt(dom.childAt(element6, [3]),1,1);
      morphs[8] = dom.createAttrMorph(element7, 'onchange');
      morphs[9] = dom.createMorphAt(element7,1,1);
      morphs[10] = dom.createMorphAt(dom.childAt(element8, [3]),1,1);
      morphs[11] = dom.createMorphAt(dom.childAt(element8, [7]),1,1);
      morphs[12] = dom.createMorphAt(dom.childAt(element9, [3]),1,1);
      morphs[13] = dom.createMorphAt(dom.childAt(element9, [7]),1,1);
      morphs[14] = dom.createMorphAt(dom.childAt(element10, [3]),1,1);
      morphs[15] = dom.createMorphAt(dom.childAt(element10, [7]),1,1);
      morphs[16] = dom.createMorphAt(dom.childAt(element11, [3]),1,1);
      morphs[17] = dom.createMorphAt(dom.childAt(element11, [7]),1,1);
      morphs[18] = dom.createMorphAt(dom.childAt(element3, [29, 3]),1,1);
      morphs[19] = dom.createMorphAt(dom.childAt(element12, [1, 1, 1]),0,0);
      morphs[20] = dom.createMorphAt(dom.childAt(element12, [3, 1, 1]),0,0);
      morphs[21] = dom.createMorphAt(dom.childAt(element12, [5, 1, 1]),0,0);
      morphs[22] = dom.createMorphAt(element3,36,36);
      morphs[23] = dom.createMorphAt(element3,39,39);
      morphs[24] = dom.createMorphAt(element2,4,4);
      return morphs;
    },
    statements: [
      ["inline","partial",["host/add-common"],[],["loc",[null,[4,4],[4,33]]],0,0],
      ["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","model.sakuracloudConfig.region",["loc",[null,[16,60],[16,90]]],0,0,0,0]],[],["loc",[null,[16,55],[16,91]]],0,0]],["value","target.value"],["loc",[null,[null,null],[16,114]]],0,0],0,0,0,0],
      ["block","each",[["get","regionChoices",["loc",[null,[17,18],[17,31]]],0,0,0,0]],[],0,null,["loc",[null,[17,10],[19,19]]]],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.sakuracloudConfig.accessToken",["loc",[null,[31,16],[31,51]]],0,0,0,0]],[],[],0,0],"placeholder","アクセストークンを入力してください"],["loc",[null,[29,8],[33,10]]],0,0],
      ["inline","input",[],["type","password","class","form-control","value",["subexpr","@mut",[["get","model.sakuracloudConfig.accessTokenSecret",["loc",[null,[44,16],[44,57]]],0,0,0,0]],[],[],0,0],"placeholder","シークレットトークンを入力してください"],["loc",[null,[42,8],[46,10]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.core",["loc",[null,[59,34],[59,62]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","CPUs"],["loc",[null,[59,8],[59,109]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.memorySize",["loc",[null,[65,34],[65,68]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","メモリ数(GB)"],["loc",[null,[65,8],[65,119]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.diskName",["loc",[null,[74,34],[74,66]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","ディスク名を入力してください"],["loc",[null,[74,8],[74,123]]],0,0],
      ["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","model.sakuracloudConfig.diskPlan",["loc",[null,[80,60],[80,92]]],0,0,0,0]],[],["loc",[null,[80,55],[80,93]]],0,0]],["value","target.value"],["loc",[null,[null,null],[80,116]]],0,0],0,0,0,0],
      ["block","each",[["get","diskPlanChoices",["loc",[null,[81,18],[81,33]]],0,0,0,0]],[],1,null,["loc",[null,[81,10],[83,19]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.connectedSwitch",["loc",[null,[97,34],[97,73]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","スイッチ/ルーターのIDを入力してください"],["loc",[null,[97,8],[97,137]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.dnsZone",["loc",[null,[103,34],[103,65]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","クラウドDNSへ登録する際の対象ドメイン名を入力してください"],["loc",[null,[103,8],[103,138]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.privateIp",["loc",[null,[112,34],[112,67]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","eth1 の IP アドレスを入力してください"],["loc",[null,[112,8],[112,133]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.privateSubnetMask",["loc",[null,[118,34],[118,75]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","eth1 のサブネットマスクを入力してください"],["loc",[null,[118,8],[118,141]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.packetFilter",["loc",[null,[127,34],[127,70]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","eth0向けのパケットフィルター名/IDを入力してください"],["loc",[null,[127,8],[127,142]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.privatePacketFIlter",["loc",[null,[134,34],[134,77]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","eth1向けのパケットフィルター名/IDを入力してください"],["loc",[null,[134,8],[134,149]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.gateway",["loc",[null,[144,34],[144,65]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","ゲートウェイを入力してください"],["loc",[null,[144,8],[144,123]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.gslb",["loc",[null,[151,34],[151,62]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","GSLB名を入力してください"],["loc",[null,[151,8],[151,119]]],0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.sakuracloudConfig.sshKey",["loc",[null,[161,34],[161,64]]],0,0,0,0]],[],[],0,0],"classNames","form-control","placeholder","SSH秘密鍵へのパスを入力してください"],["loc",[null,[161,8],[161,126]]],0,0],
      ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","model.sakuracloudConfig.privateIpOnly",["loc",[null,[174,53],[174,90]]],0,0,0,0]],[],[],0,0]],["loc",[null,[174,21],[174,92]]],0,0],
      ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","model.sakuracloudConfig.autoReboot",["loc",[null,[179,53],[179,87]]],0,0,0,0]],[],[],0,0]],["loc",[null,[179,21],[179,89]]],0,0],
      ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","model.sakuracloudConfig.enablePasswordAuto",["loc",[null,[184,53],[184,95]]],0,0,0,0]],[],[],0,0]],["loc",[null,[184,21],[184,97]]],0,0],
      ["inline","partial",["host/add-options"],[],["loc",[null,[191,2],[191,32]]],0,0],
      ["inline","save-cancel",[],["save","save","cancel","cancel"],["loc",[null,[194,2],[194,45]]],0,0],
      ["inline","top-errors",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[199,22],[199,28]]],0,0,0,0]],[],[],0,0]],["loc",[null,[199,2],[199,30]]],0,0]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));;

});
