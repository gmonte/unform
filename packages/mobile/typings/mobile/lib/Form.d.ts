import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { FormHandles, SubmitHandler } from '@unform/core';
export interface FormProps extends ViewProps {
    initialData?: Record<string, any>;
    children: ReactNode;
    onSubmit: SubmitHandler;
}
export declare const Form: import("react").ForwardRefExoticComponent<FormProps & import("react").RefAttributes<FormHandles>>;
//# sourceMappingURL=Form.d.ts.map