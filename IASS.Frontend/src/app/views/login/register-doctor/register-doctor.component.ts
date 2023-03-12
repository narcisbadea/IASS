import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/api/services';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html'
})
export class RegisterDoctorComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  public photoFile: File | null = null;

  constructor(private router: Router, private authService: AuthService, private alertService: AlertService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      photo: [null] // new form control for photo input
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register$: Subject<void> = new Subject<void>();
  destroy$: Subject<void> = new Subject<void>();

  onPhotoChange(event: any) {
    const file = event.target.files[0];
    this.photoFile = file;
  }

  onSubmit() {
    if (this.photoFile != null) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(this.photoFile);
      reader.onload = () => {
        this.registerForm.patchValue({ photo: new Blob([reader.result], { type: this.photoFile.type }) as Blob });
      };
    }
    this.register$
      .pipe(
        debounceTime(300),
        switchMap((_) =>
          this.authService.authRegisterDoctorPost$Json({ body: this.registerForm.value })
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res: string) => {
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          this.alertService.error(error.error);
        },
      });
    this.register$.next();
  }

  onCancel() {
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
