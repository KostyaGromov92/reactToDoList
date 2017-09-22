import _ from 'lodash';

export default function(items) {

  const maxItem = _.max(items, function (obj) {
      return obj.id;
  });
  if (maxItem) {
    return maxItem.id + 1;
  } else {
    return 0;
  }
}