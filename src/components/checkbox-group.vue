<script>
import Emitter from '../style/mixins/emitter';

export default {
    name: 'ElCheckboxGroup',

    componentName: 'ElCheckboxGroup',

    mixins:[Emitter],

    inject: {
        elFormItem: {
            default:''
        }
    },

    props: {
        value: {},
        disabled: Boolean,
        min:Number,
        max:Number,
        size:String,
        fill:String,
        textColor:String
    },

    computed: {
        _elFormItemSize() {
            return (this.elFormItem || {})._elFormItemSize;
        },
        checkboxGroupSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        }
    },

    watch: {
        value(value) {
            this.dispatch('ElFormItem', 'el.form.chang', [value]);
        }
    }
};
</script>

<template>
    <div class="el-checkbox-group" role="group" aria-label="checkbox-group">
        <slot></slot>
    </div>
</template>