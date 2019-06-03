import template from './template/Radio.html'
import { RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC, FALSE } from '../constant'
import { findComponentUpward } from '../util'

export default {
  propTypes: {
    label: {
      type: RAW_STRING
    },
    value: {
      type: [ RAW_NUMERIC, RAW_BOOLEAN, RAW_STRING ]
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    checked: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template,

  data() {
    return {
      isChecked: FALSE,
      name: '',
      isDisabled: this.get('disabled')
    }
  },

  events: {
    updateRadioValue(_, data) {
      this.set({
        isChecked: data.value == this.get('value')
      })
    }
  },

  methods: {
    click() {
      let me = this
      if (me.get('isDisabled')) {
        return
      }
      me.fire(
        'radioValueChange',
        {
          value: me.get('value')
        }
      )
      return
    }
  },

  afterMount() {
    let radiogroup = findComponentUpward(this, '${prefix}radiogroup')
    if (radiogroup) {
      this.set({
        name: radiogroup.get('name'),
        isDisabled: this.get('disabled') || radiogroup.get('disabled'),
        isChecked: this.get('checked') || radiogroup.get('value') == this.get('value')
      })
    }
  }
  
}