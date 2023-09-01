<script setup lang="ts" generic="T, V">
import type { CheckedFormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { UnwrapRef, computed, ref, useSlots } from 'vue';

defineSlots<FormControlSlots<T>>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: UnwrapRef<T> | UnwrapRef<V>): void;
}>();

const props = withDefaults(defineProps<CheckedFormControlProps<T, V>>(), {
    formControlClass: 'form-select',
    labelClass: 'form-label'
});

// We need to set the currentValue for select fields. When blurring a select
// field without a v-model set, the value will be set to undefined when the
// computed values change.
const currentvalue = ref(props.modelValue ?? props.value);

const model = computed({
    get: () => currentvalue.value,
    set(value) {
        currentvalue.value = value;

        emit('update:modelValue', value);
    }
});

const {
    controlAttributes,
    formGroupClasses,
    onClick,
    onBlur,
    onFocus
} = useFormControl(props, emit, model);

const field = ref<HTMLSelectElement>();

function onMousedown(e) {
    onClick(e);

    field.value.focus();
}
</script>

<template>
    <div
        class="select-field"
        :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :for="controlAttributes.id"
                :class="labelClass">
                {{ label }}
            </label>
        </slot>

        <div class="form-group-inner">
            <slot
                name="control"
                v-bind="{ onClick, onBlur, onFocus, controlAttributes }">
                <div
                    v-if="useSlots().icon"
                    class="form-group-inner-icon"
                    @click="field.focus">
                    <slot name="icon" />
                </div>
                <select
                    ref="field"
                    v-model="model"
                    class="form-select"
                    v-bind="controlAttributes"
                    @mousedown="onMousedown"
                    @blur="onBlur"
                    @focus="onFocus">
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
                :id="$attrs.id && String($attrs.id)"
                v-slot="{ error }"
                :name="$attrs.name && String($attrs.name)"
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

        <slot
            name="help"
            v-bind="{ helpText }">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>