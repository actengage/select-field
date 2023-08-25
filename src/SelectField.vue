<script lang="ts">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { FormControl } from '@vue-interface/form-control';
import { defineComponent } from 'vue';

export default defineComponent({

    name: 'SelectField',

    components: {
        ActivityIndicator,
    },

    extends: FormControl,

    props: {
        /**
         * The default class name assigned to the control element
         *
         * @param {String}
         * @default 'form-select'
         */
        formControlClass: {
            type: String,
            default: 'form-select'
        }   
    },

    computed: {
        controlClass() {
            return this.plaintext ?
                `${this.formControlClass}-plaintext`
                : this.formControlClass;
        }
    }

});
</script>

<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :for="id"
                :class="labelClass">
                {{ label }}
            </label>
        </slot>

        <div class="form-group-inner">
            <slot
                name="control"
                v-bind="{ bindEvents, controlAttributes }">
                <div
                    v-if="$slots.icon"
                    class="form-group-inner-icon"
                    @click="focus">
                    <slot name="icon" />
                </div>
                <select
                    ref="field"
                    v-model="model"
                    v-bind-events
                    v-bind="Object.assign({
                        ['disabled']: $attrs.readonly
                    }, controlAttributes)">
                    <slot />
                </select>
            </slot>

            <slot name="activity">
                <Transition name="select-field-fade">
                    <ActivityIndicator
                        v-if="activity && indicator"
                        key="activity"
                        ref="activity"
                        :type="indicator"
                        :size="indicatorSize" />
                </Transition>
            </slot>
        </div>

        <slot
            name="errors"
            v-bind="{ error, errors, id: $attrs.id, name: $attrs.name }">        
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="$attrs.id"
                v-slot="{ error }"
                :name="$attrs.name"
                :error="error"
                :errors="errors">
                <div
                    invalid
                    class="invalid-feedback">
                    {{ error }}<br>
                </div>
            </FormControlErrors>
        </slot>
        
        <slot
            name="feedback"
            v-bind="{ feedback }">
            <FormControlFeedback
                v-slot="{ feedback }"
                :feedback="feedback">
                <div
                    valid
                    class="valid-feedback">
                    {{ feedback }}
                </div>
            </FormControlFeedback>
        </slot>

        <slot name="help">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>