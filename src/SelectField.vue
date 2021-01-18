<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label v-if="label" ref="label" :for="id" :class="labelClass" v-html="label" />
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
                v-if="invalidFeedback"
                class="invalid-feedback"
                invalid
                v-html="invalidFeedback" />
            <div 
                v-else-if="validFeedback"
                class="valid-feedback"
                valid
                v-html="validFeedback" />
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

import FormControl from '@vue-interface/form-control';

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
        FormControl
    ],

    props: {
        /**
         * The default class name assigned to the control element.
         *
         * @param {String}
         * @default 'form-select'
         */
        defaultControlClass: {
            type: String,
            default: 'form-select'
        },

        /**
         * The legacy class name.
         *
         * @param {String}
         * @default 'form-control'
         */
        legacyControlClass: {
            type: String,
            default: 'custom-select'
        }   
    },

    computed: {

        controlClass() {
            const controlClass = this.custom ? 'custom-select' : (
                this.legacy ? this.legacyControlClass : this.defaultControlClass
            );

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

.select-field,
.select-field .form-group-inner {
    position: relative;
    transition: all .25s ease-in-out;
}

.select-field .activity-indicator {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translate(-1rem, -50%);
    transition: all .15s ease-in;
}

.select-field .activity-indicator-xs {
    font-size: .5em;
}

.select-field .activity-indicator-sm {
    font-size: .5em;
}

.select-field .activity-indicator-md {
    font-size: .666em;
}

.select-field .activity-indicator-lg {
    font-size: .75em;
}

.select-field .activity-indicator-xl {
    font-size: 1em;
}

.select-field .activity-indicator {
    opacity: 1;
}

.select-field .select-field-fade-enter,
.select-field .select-field-fade-leave-to {
    opacity: 0;
}

.select-field.is-valid .valid-feedback,
.select-field.is-invalid .invalid-feedback {
    display: flex;
}

.select-field .form-control-icon {
    padding-left: 2em;
}

.select-field .form-group-inner-icon {
    position: absolute;
    top: 50%;
    left: .666rem;
    width: 1rem;
    font-size: 1rem;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

