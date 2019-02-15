import React from 'react';

const Info = () => {
	return (
		<div className="group info">
			<div className="title" />
			<div className="field documentNumber">
				<label>Заявление на перевод №</label>
				<input type="text" value="256" />
			</div>
			<div className="field  paymentDate">
				<label>Дата</label>
				<input type="text" value="07.11.2012" />
			</div>
			<div className="field paymentSpeed">
				<label>Вид перевода</label>
				<input type="text" value="обычный" />
			</div>
		</div>
	);
};
const Payer = () => {
	return (
		<div className="group payer">
			<div className="title" />
			<div className="field payerName">
				<label>Наименование</label>
				<input type="text" value="JSC Melody" />
			</div>
			<div className="field payerAcc">
				<label>Счет</label>
				<input type="text" value="40702840980000000003" />
			</div>
			<div className="field payerInn">
				<label>ИНН</label>
				<input type="text" value="7726627299" />
			</div>
			<div className="field amount">
				<label>Сумма</label>
				<input type="text" value="150.00" />
			</div>
			<div className="field payer-city">
				<label>Город</label>
				<input type="text" value="Moscow" />
			</div>
			<div className="field payment-currency">
				<label>Валюта</label>
				<input type="text" value="USD" />
			</div>
			<div className="field payment-rate">
				<label>Курc</label>
				<input type="text" value="45.6" />
			</div>
			<div className="field payer-country-code">
				<label>Код</label>
				<input type="text" value="643" />
			</div>
			<div className="field payer-country">
				<label>Страна</label>
				<input type="text" value="RUSSIAN FEDERATION" />
			</div>
			<div className="field payer-address">
				<label>Адрес</label>
				<input type="text" value="117234б Garibidi st., 23" />
			</div>
			<div className="field payer-employee-fio">
				<label>Ф.И.О</label>
				<input type="text" value="Иванов Иван Иванович" />
			</div>
			<div className="field payer-employee-fio-phones">
				<label>Тел.</label>
				<input type="text" value="+74957895478" />
			</div>
		</div>
	);
};
const PayerBank = () => {
	return (
		<div className="group payer-bank">
			<div className="title" />
			<div className="field bank-name">
				<label>Наименование</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field bic-type">
				<label>Тип</label>
				<input type="text" value="SWIFT" />
			</div>
			<div className="field bank-bic">
				<label>BIC</label>
				<input type="text" value="PTRBRUMMXXX" />
			</div>
			<div className="field bank-bic-rus">
				<label>БИК</label>
				<input type="text" value="456721822" />
			</div>
			<div className="field bank-city">
				<label>Город</label>
				<input type="text" value="Moscow" />
			</div>
			<div className="field bank-country-code">
				<label>Код</label>
				<input type="text" value="643" />
			</div>
			<div className="field bank-country">
				<label>Страна</label>
				<input type="text" value="RUSSIAN FEDERATION" />
			</div>
			<div className="field bank-address">
				<label>Адрес</label>
				<input type="text" value="117234б Garibidi st., 23" />
			</div>
		</div>
	);
};
const IntermedBank = () => {
	return (
		<div className="group intermed-bank">
			<div className="title" />
			<div className="field bank-name">
				<label>Наименование</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field bic-type">
				<label>Тип</label>
				<input type="text" value="SWIFT" />
			</div>
			<div className="field bank-bic">
				<label>BIC</label>
				<input type="text" value="PTRBRUMMXXX" />
			</div>
			<div className="field bank-bic-rus">
				<label>БИК</label>
				<input type="text" value="456721822" />
			</div>
			<div className="field bank-city">
				<label>Город</label>
				<input type="text" value="Moscow" />
			</div>
			<div className="field bank-country-code">
				<label>Код</label>
				<input type="text" value="643" />
			</div>
			<div className="field bank-country">
				<label>Страна</label>
				<input type="text" value="RUSSIAN FEDERATION" />
			</div>
			<div className="field bank-address">
				<label>Адрес</label>
				<input type="text" value="117234б Garibidi st., 23" />
			</div>
		</div>
	);
};
const PayeeBank = () => {
	return (
		<div className="group payee-bank">
			<div className="title" />
			<div className="field bank-name">
				<label>Наименование</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field bic-type">
				<label>Тип</label>
				<input type="text" value="SWIFT" />
			</div>
			<div className="field bank-bic">
				<label>BIC</label>
				<input type="text" value="PTRBRUMMXXX" />
			</div>
			<div className="field bank-bic-rus">
				<label>БИК</label>
				<input type="text" value="456721822" />
			</div>
			<div className="field bank-city">
				<label>Город</label>
				<input type="text" value="Moscow" />
			</div>
			<div className="field bank-country-code">
				<label>Код</label>
				<input type="text" value="643" />
			</div>
			<div className="field bank-country">
				<label>Страна</label>
				<input type="text" value="RUSSIAN FEDERATION" />
			</div>
			<div className="field bank-address">
				<label>Адрес</label>
				<input type="text" value="117234б Garibidi st., 23" />
			</div>
		</div>
	);
};
const Payee = () => {
	return (
		<div className="group payee">
			<div className="title" />
			<div className="field payee-name">
				<label>Наименование</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field payee-acc">
				<label>Счет</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field payee-city">
				<label>Город</label>
				<input type="text" value="Moscow" />
			</div>
			<div className="field payee-country-code">
				<label>Код</label>
				<input type="text" value="643" />
			</div>
			<div className="field payee-country">
				<label>Страна</label>
				<input type="text" value="RUSSIAN FEDERATION" />
			</div>
			<div className="field payee-address">
				<label>Адрес</label>
				<input type="text" value="117234б Garibidi st., 23" />
			</div>
		</div>
	);
};
const Commision = () => {
	return (
		<div className="group commission">
			<div className="title" />
			<div className="field commission-type">
				<label>Комимсия</label>
				<input type="text" value="за наш счет EUR" />
			</div>
			<div className="field commission-from">
				<label>Счет</label>
				<input type="text" value="407028409655564000000" />
			</div>
			<div className="field purpose-text">
				<label>Назначение</label>
				<input type="text" value="Payment htmlFor penats" />
			</div>
			<div className="field addinfo-text">
				<label>Дополнительно</label>
				<input type="text" value="3" />
			</div>
		</div>
	);
};
const ControlInfo = () => {
	return (
		<div className="group control-info">
			<div className="title" />
			<div className="field control-info-contract">
				<label>Договор,контракт</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field control-info-passport">
				<label>Паспорт сделки</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field control-info-declaration">
				<label>Декларация</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
			<div className="field control-addinfo-text">
				<label>Дополнительно</label>
				<input type="text" value="OJSC BANK PETROCOMMERCE" />
			</div>
		</div>
	);
};

export default () => (
	<section className="form">
		<Info />
		<Payer />
		<PayerBank />
		<IntermedBank />
		<PayeeBank />
		<Payee />
		<Commision />
		<ControlInfo />
	</section>
);
