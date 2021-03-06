const _ = require('lodash');
const ERR = require('../error.json');

exports.onNode = function(node, rule, error, engine) {
    if (!rule.mandatory_ancestor) return;

    for (var cur = node.parentNode; cur && cur.nodeName; cur = cur.parentNode) {
        if (rule.mandatory_ancestor === cur.nodeName) {
            return;
        }
    }
    var err = ERR.MANDATORY_TAG_ANCESTOR;
    error(err, node.nodeName, rule.mandatory_ancestor);
};
