import { helper } from '@ember/component/helper';

export function truncateText(params/*, hash*/) {
  if(params[0].length > params[1]) {
    return params[0].substring(0, params[1]) + "...";
  }
  else{
    return params[0];
  }
}

export default helper(truncateText);
