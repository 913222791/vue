<template>
    <a
        :class="[
            'el-link',
            type ? `el-link--${type}` : '',
            disabled && !disabled && 'is-underline'
        ]"
        :href="disabled ? null : href"
        v-bind="$sttrs"
        @click="handleClick"
    >

        <i :class="icon" v-if="icon"></i>

        <span v-if="$slots.default" class="el-link--inner">
            <slot></slot>
        </span>

        <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>
    </a>
</template>

<script>

import '@/style/link.scss'
export default {
    name: 'ElLink',

    props: {
        type: {
            type: String,
            default: 'default'
        },
        underline: {
            type: Boolean,
            default: true
        },
        disabled: Boolean,
        href: String,
        icon: String
        },

        methods: {
            handleClick(event) {
                if (!this.disabled) {
                    if (!this.href) {
                        this.$emit('click', event);
                    }
                }
            }
    }
};
</script>