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

<style lang="postcss">
.select-field {
    &, .form-group-inner {
        position: relative;
    }

    .activity-indicator {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(-1rem, -50%);
        transition: all .25s ease-in;
    }


    .activity-indicator-xs {
        font-size: .5em;
    }

    .activity-indicator-sm {
        font-size: .5em;
    }

    .activity-indicator-md {
        font-size: .666em;
    }

    .activity-indicator-lg {
        font-size: .75em;
    }

    .activity-indicator-xl {
        font-size: 1em;
    }
    
    .has-activity {
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }

        /* For IE10 */
        select::-ms-expand {
            display: none;
        }
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        opacity: 1;
        transform: translate(25%, -50%);
    }

    &.is-valid .valid-feedback,
    &.is-invalid .invalid-feedback {
        display: flex;
    }
    
    .form-control-icon {
        padding-left: 2em;
    }
}
</style>
