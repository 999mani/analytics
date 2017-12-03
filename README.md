## Realtime Detail Analytics and UI Heat Maps for Web ( In Development ) :

1. Initial Commit Stage
2. Need to setup Node Server to receiveData based on transport type
3. Parse and Send Data based on timestamp
4. Setup cassandra to store Data


## Prerequisites

1. Socket IO
2. Beacon

## Running :

```HTML

<div class="BlogPost" data-uiAnalyticsEvent="BlogName">
</div>
<div class="Comments" data-uiAnalyticsEvent="CommentBlockName">
</div>
<div class="PaymentBlock" data-uiAnalyticsEvent="PaymentBlockName">
</div>

```

```javascript
<script type="text/javascript" src="ui-analytics.js"></script>
var options = {};
UIAnalytics().init(options);

```

## Options :

| Option        | Data Type     | Description  | Default  |
| ------------- |:-------------:| ------------:|----------:|
| username      | String        | Unique Id for User  | NULL |
| timeIntervel  | Int           | IN Milliseconds | 2000|
| accessLocation| Boolean       |  Access  Coordinates  | false |
| browserType   | Boolean       |    Browser Name |true |


## Stack

1. Socket IO (Client Side)
2. Node JS
3. Cassandra (To Log Data)
