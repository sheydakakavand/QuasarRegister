<template>
  <q-page class="bg-grey-1 window-height window-width justify-center items-center row col ">
    <div class="bg-blue-1" style="width: 750px; padding: 25px" >

    <div class="column">
      <div class="row">
        <h5 class="text-h5  q-my-md col row justify-end  " >*اطلاعات کاربری</h5>
      </div>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <span class="label  text-weight-bolder row justify-end ">نام و نام خانوادگی</span>
        <q-input
          filled
          v-model="name"
          align="right"
          label="نام خود را وارد نمایید"
          input-class="text-right"
          :rules="[val => !!val || 'Field is required']"
        />
        <span class="label row justify-end text-weight-bolder">آدرس ایمیل</span>
        <q-input
          filled
          type="email"
          v-model="email"
          align="left"
          label="آدرس ایمیل خود را وارد نمایید"
          :rules="[val => !!val || 'Field is required']"
        />
        <span class="label  text-weight-bolder row justify-end ">انتخاب رمز عبور</span>
        <q-input
          filled
          type="password"
          v-model="password"
          align="left"
          label=" رمز عبور"
          :rules="[val => !!val || 'Field is required']"
        />
        <span class="label text-weight-bolder row justify-end ">تکرار رمز عبور</span>
        <q-input
          filled
          type="password"
          v-model="password"
          align="left"
          label="تکرار رمز عبور"
          :rules="[val => !!val || 'Field is required']"
        />

        <div>
          <q-btn label="ثبت نام"  size="24px" type="submit" color="teal-5"/>

        </div>
      </q-form>
    </div>
    </div>
  </q-page>
</template>
