import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TABS_VALUE_ACCESSOR_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TabsComponent),
  multi: true,
};

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [TABS_VALUE_ACCESSOR_PROVIDER],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent<T> implements ControlValueAccessor {
  public value: T | undefined;

  onChange!: (value: T) => void;
  onTouched!: () => void;

  public changeValue(value: T) {
    this.onChange((this.value = value));
    this.onTouched();
  }

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
