<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label v-if="label" ref="label" :for="$attrs.id" :class="labelClass" v-html="label" />
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <div v-if="$slots.icon" class="mx-2 pl-1">
                    <slot name="icon" />
                </div>
                <select
                    ref="field"
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="value"
                    @input="$emit('input', $event.target.value)">
                    <slot />
                </select>
            </slot>

            <slot name="activity">
                <transition name="slide-fade">
                    <activity-indicator v-if="activity" key="activity" ref="activity" type="dots" :size="size" />
                </transition>
            </slot>
        </div>

        <slot name="feedback">
            <div 
                v-if="validFeedback"
                class="valid-feedback"
                valid>
                {{ validFeedback }}
            </div>
            <div 
                v-else-if="invalidFeedback"
                class="invalid-feedback"
                invalid>
                {{ invalidFeedback }}
            </div>
        </slot>

        <slot name="help">
            <small v-if="helpText" ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>

<script>
import { ActivityIndicator, register } from '@vue-interface/activity-indicator';
import Dots from '@vue-interface/activity-indicator/src/types/Dots';

import FormControlMixin from '@vue-interface/form-control';

const CUSTOM_SELECT_PREFIX = 'custom-select-';

register({
    dots: Dots
});

export default {

    name: 'SelectField',

    components: {
        ActivityIndicator,
    },

    mixins: [
        FormControlMixin
    ],

    props: {
        /**
         * The default class name assigned to the control element
         *
         * @param {String}
         * @default 'form-select'
         */
        defaultControlClass: {
            type: String,
            default: 'form-select'
        }   
    },

    computed: {

        controlClass() {
            const controlClass = this.custom
                ? 'custom-select'
                : this.defaultControlClass;
            
            return this.plaintext ? `${controlClass}-plaintext` : controlClass;
        },

        customSelectClasses() {
            return [
                CUSTOM_SELECT_PREFIX.replace(/-$/, '') + (this.plaintext ? '-plaintext' : ''),
                this.customSelectSizeClass,
                (this.spacing || '')
            ].join(' ');
        }
    }

};
</script>

<style>
.has-activity select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

/* For IE10 */
.has-activity select::-ms-expand {
    display: none;
}
</style>

