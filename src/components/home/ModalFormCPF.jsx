import React, { isValidElement, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { cpf } from "cpf-cnpj-validator";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const ModalFormCPF = () => {
  const Schema = yup.object({
    CPF: yup
      .string()
      .required("Precisamos de um CPF válido.")
      .test((value) => cpf.isValid(value)),
  });

  return (
    <Formik initialValues={{ CPF: "" }} validationSchema={Schema}>
      <div className="w-[330px] bg-white rounded-xl p-5 flex flex-col mt-10 md:mt-0">
        <h1 className="text-black text-2xl text-center font-semibold">
          Peça sua conta e cartão de crédito do Nubank
        </h1>
        <Form className="w-full">
          <Field
            name="CPF"
            id="cpf"
            className="w-full border-b-2 border-textNAv/30 mt-14 py-1 text-base outline-none hover:border-textNAv/70 duration-200"
            placeholder="Digite seu CPF"
          />
          <ErrorMessage
            component="div"
            name="CPF"
            className="text-red-600 text-sm font-bold"
          />
          <button className="btnForm" disabled>
            Continuar
            <MdArrowRightAlt className="text-2xl" />
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ModalFormCPF;
