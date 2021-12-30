### Aim of the experiment: PLC On-Delay Timer Instruction

<strong>Aim</strong>: To understand the working of on-delay timer instruction in a programmable logic controller.

<p><strong>Procedure</strong>: In our experiment we wish to demonstrate the working of on-delay timer instruction.</p>

<center><img src="images/1.gif" height=450 width=500></center>
</br>

<ul type="disc" style="text-align: justify;">
<li>Since inputs and outputs are less, 8-point input module and 8-point output module is sufficient, where CPU resides in slot 0, input module resides in slot 1 and output module in slot 2. </li>

<li>In our experiment, we want our motor to run for 20 seconds and for this purpose, timer on-delay instruction is used. Here, one switch is used to turn the motor ON or OFF. The working status of the motor is displayed using LED’s. when the motor is running ,
Motor ON LED will glow. When the motor is not running , Motor OFF LED will glow. When the motor has done timing , Done timing LED will glow. </li>

<li>Let us assign address for the input and output signals of the PLC: <br>
&nbsp;&#10147; Start (switch) : I:1/0 <br>
&nbsp;&#10147; Motor ON (LED) : O:2/1 <br>
&nbsp;&#10147; Motor OFF (LED) : O:2/2 <br>
&nbsp;&#10147; Done timing (LED) : O:2/3 <br>
&nbsp;&#10147; Motor : O:2/4 </li>

<li>Let us see the ladder diagram:
<center><img src="images/2.gif" height=450 width=500></center>
</li>

<li>In order to see how the on-delay timer instruction in a PLC works, click (toggle) the start switch and observe the timer instruction. Also, observe the LED and motor correspondingly. <br>
The following screen shot explains the operations:<br>

<center><img src="images/3.gif" height=500 width=650></center><br>
The above screen shot represents the default condition, i.e. when the switch is open.</li><br>

<li><br>
<center><img src="images/4.gif" height=500 width=650></center><br>
The above screen shot represents the condition when the switch is closed and timer is timing.
</li><br>

<li><br><center><img src="images/5.gif" height=500 width=650></center><br>
The above screen shot represents the condition when the timer is done timing.</li>
</ul>
