var APP_DATA = {
  "scenes": [
    {
      "id": "0-door",
      "name": "door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7729803229411765,
          "pitch": -0.35673158448569886,
          "rotation": 0,
          "target": "2-bed"
        },
        {
          "yaw": 0.2862042862696228,
          "pitch": 0.012303383444212557,
          "rotation": 0,
          "target": "1-desk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-desk",
      "name": "desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.034152424551138,
          "pitch": -0.8529531897108473,
          "rotation": 0,
          "target": "2-bed"
        },
        {
          "yaw": 2.6363309624708693,
          "pitch": 0.16252227858907986,
          "rotation": 0,
          "target": "0-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bed",
      "name": "bed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4525668980090423,
          "pitch": 0.7425533020551303,
          "rotation": 0,
          "target": "1-desk"
        },
        {
          "yaw": 2.998341317084596,
          "pitch": 0.6652264347266232,
          "rotation": 0,
          "target": "0-door"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
