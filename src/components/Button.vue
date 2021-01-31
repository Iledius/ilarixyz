import Vue from "vue"

Vue.component('my-button', {
  template: '\
    <button class="normal"\
      :class="type"\
      :disabled="disabled"\
      @click="callback($event)"\
      >\
        <slot></slot>\
    </button>\
  ',
  props: {
    type: String,
    disabled: Boolean
  },
  methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
});