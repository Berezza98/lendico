<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="Amount: ">
        <el-input
          v-model="computedAmount"
          :min="10000"
          :max="100000"
          placeholder="10000"
        ></el-input>
      </el-form-item>
      <el-form-item label="Duration: ">
        <el-input-number
          v-model="computedDuration"
          :min="1"
          :max="5">
        </el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :disabled="!isAmountValid"
          @click="onSubmit"
        >
        OK
        </el-button>
      </el-form-item>
    </el-form>
    <el-card v-loading="showLoader" class="box-card">
      <p v-if="!showLoader && showInfo">
        Monthly Installment: {{ monthlyInstallment | currencyEUR }}
      </p>
    </el-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Types from "../store/types";

export default {
  data() {
    return {
      showLoader: false,
      showInfo: false
    }
  },
  computed: {
    ...mapState("calendar", [
      "monthlyInstallment",
      "amount",
      "duration"
    ]),
    computedAmount: {
      get() {
        return this.amount;
      },
      set(value) {
        this.updateAmount(value);
      }
    },
    computedDuration: {
      get() {
        return this.duration;
      },
      set(value) {
        this.updateDuration(value);
      }
    },
    isAmountValid() {
      const amount = parseFloat(this.computedAmount);
      console.log(amount);
      if (amount >= 10000 && amount <= 100000) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions("calendar", {
      updateDuration: Types.actions.UPDATE_DURATION,
      updateAmount: Types.actions.UPDATE_AMOUNT,
      getMonthlyInstallment: Types.actions.GET_MONTHLY_INSTALLMENT

    }),
    async onSubmit() {
      this.showLoader = true;
      this.showInfo = false;
      await this.getMonthlyInstallment();
      this.showInfo = true;
      this.showLoader = false;
    }
  },
  filters: {
    currencyEUR: function (value) {
      if (!value) return ''
      value = parseInt(value);
      return value.toFixed(2) + "EUR";
    }
  }
}
</script>

<style scoped>
  .box-card {
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
